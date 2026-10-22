# Nritya AI — AI/ML Architecture & Model Training Specification

This technical specification details the production Machine Learning pipeline, model training schema, and backend integration design for the **Nritya AI** platform.

---

## 1. High-Level AI/ML Pipeline

```
[YouTube URL / Uploaded Video (.mp4/.webm)]
                      │
                      ▼
            [Video Frame Extraction] (OpenCV / PyAV at 60 FPS)
                      │
                      ▼
       [Pose & 3D Landmark Extraction] (MediaPipe / MoveNet Thunder)
                      │
                      ▼
         [Optical Flow & Kinematics] (Lucas-Kanade velocity vectors)
                      │
                      ├──────────────────────────┐
                      ▼                          ▼
          [Beat & Onset Detection]    [Spatio-Temporal GCN]
          (Librosa spectral flux,     (Spatial Temporal Graph
           tempo & downbeat tracking)   Convolutional Networks)
                      │                          │
                      └─────────────┬────────────┘
                                    ▼
                 [Movement + Beat Synchronization]
                                    │
                                    ▼
                 [Dance Style & Mudra Matching]
                                    │
                                    ▼
                 [Dynamic Step Segmentation]
                 (Peak energy minima & rhythm closures)
                                    │
                                    ▼
              [Step-by-Step Dance JSON Generation]
                                    │
                                    ▼
             [Browser Camera Practice & Comparison]
                   (Real-time WebCam + DTW)
                                    │
                                    ▼
                 [Personalized Dance Feedback]
```

---

## 2. Model Training Dataset Schema

To train future domain-specific dance models (e.g. classical Bharatnatyam Adavu classifiers or Hip-Hop groove extractors), datasets should conform to this standardized JSON schema:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "NrityaDanceMovementSample",
  "type": "object",
  "properties": {
    "sample_id": { "type": "string", "example": "bn_tatta_001_take2" },
    "dance_style": {
      "type": "string",
      "enum": ["bharatnatyam", "kathak", "hiphop", "freestyle", "sangeet", "western"]
    },
    "movement_name": { "type": "string", "example": "Tatta Adavu - Prathama Kala" },
    "difficulty": { "type": "string", "enum": ["beginner", "intermediate", "advanced", "mastery"] },
    "bpm": { "type": "number", "example": 84.0 },
    "duration_seconds": { "type": "number", "example": 3.42 },
    "time_signature": { "type": "string", "example": "4/4" },
    "count_sequence": {
      "type": "array",
      "items": { "type": "string" },
      "example": ["1", "and", "2", "and", "3", "and", "4"]
    },
    "classical_annotations": {
      "type": "object",
      "properties": {
        "bols": { "type": "string", "example": "Tai Ya Tai Hi" },
        "hasta_mudra_left": { "type": "string", "example": "Pataka" },
        "hasta_mudra_right": { "type": "string", "example": "Pataka" },
        "pada_bheda": { "type": "string", "example": "Samapada / Udghatita" },
        "drishti_bheda": { "type": "string", "example": "Alokita" }
      }
    },
    "frame_sequence": {
      "type": "array",
      "description": "Sequence of 33 3D normalized skeletal landmarks sampled at 30/60fps",
      "items": {
        "type": "object",
        "properties": {
          "frame_index": { "type": "integer" },
          "timestamp_ms": { "type": "number" },
          "is_key_pose": { "type": "boolean" },
          "landmarks": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": { "type": "integer" },
                "name": { "type": "string" },
                "x": { "type": "number" },
                "y": { "type": "number" },
                "z": { "type": "number" },
                "visibility": { "type": "number" }
              }
            }
          },
          "joint_angles": {
            "type": "object",
            "properties": {
              "left_knee_flexion": { "type": "number", "example": 115.4 },
              "right_knee_flexion": { "type": "number", "example": 94.2 },
              "left_elbow_elevation": { "type": "number", "example": 154.8 },
              "right_elbow_elevation": { "type": "number", "example": 152.1 },
              "torso_vertical_tilt": { "type": "number", "example": 89.6 }
            }
          }
        }
      }
    }
  }
}
```

---

## 3. Real Backend API Contract

When transitioning from the current prototype `NrityaAIService` to a production ML backend, mount this REST/WebSocket endpoint:

### Endpoint: `POST /api/v1/analyze-dance`

#### Request (Multipart Form):
- `youtube_url` (optional string): e.g. `"https://www.youtube.com/watch?v=..."`
- `video_file` (optional binary): File upload (`.mp4`, `.mov`, `.webm`)
- `style_hint` (optional string): `"bharatnatyam" | "kathak" | "hiphop" | ...`

#### Response:
```json
{
  "status": "success",
  "video_id": "kSqWpW5O7zU",
  "duration_seconds": 64.2,
  "inferred_style": "bharatnatyam",
  "bpm": 86,
  "confidence": 0.96,
  "choreography": {
    "title": "Bharatnatyam Tatta Adavu Practice Drill",
    "total_steps": 4,
    "steps": [
      {
        "num": 1,
        "name": "Right Foot Strike",
        "count": "1-2",
        "timestamp": "00:14",
        "duration": "3s",
        "difficulty": "Beginner",
        "desc": "Lift right foot slightly behind Araimandi line and strike firmly on the floor...",
        "target_pose_key": "tatta_right_strike",
        "front_angle": "Stamp right foot firmly with full sole while maintaining unbroken Araimandi.",
        "side_angle": "Ensure non-stamping knee does not straighten; keep center of gravity grounded."
      }
    ]
  }
}
```

### WebSocket: `WS /api/v1/stream-pose`
Enables optional server-side GPU scoring for complex multi-person or extreme low-latency environments:
- Client sends: `{ frame_jpeg: "base64", active_step_id: 1 }`
- Server streams back: `{ accuracy: 88, joint_angles: {...}, corrective_tips: [...] }`

---

## 4. Frontend vs. Backend Separation

- **Frontend (`ai-service.js`)**: Purely client-side, zero backend dependencies required for demo and offline evaluations.
- **Pose Engine (`pose-engine.js`)**: Runs directly in the browser via WebAssembly (Wasm) and WebGL using MediaPipe Pose.
- **Backend Adapter**: Simply set `window.nrityaAIService.backendApiUrl = "https://your-backend.com/api/v1"` to redirect all analysis calls to the production model server.
