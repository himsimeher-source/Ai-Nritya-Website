/**
 * dance-data.js - Nritya AI Core Dance Knowledge & Curriculum Database
 * Contains curriculums for Bharatnatyam Adavus, Kathak, Hip-Hop, FreeStyle, Sangeet, and Western dance styles.
 */

const DANCE_DATA = {
    styles: [
        {
            id: 'bharatnatyam',
            name: 'Bharatnatyam',
            icon: '🪷',
            tagline: 'Ancient temple rhythm, geometrical precision & sacred mudras',
            difficulty: 'Intermediate to Advanced',
            origin: 'Tamil Nadu, India',
            type: 'classical',
            gradient: 'linear-gradient(135deg, #e2b45c, #8a2b2b)',
            description: 'A 2000-year-old classical Indian dance characterized by the iconic Araimandi (half-sitting posture), crisp geometric arm lines, sculpted Hastas (hand mudras), and vigorous rhythmic footwork (Adavus).',
            curriculumType: 'fixed_adavu',
            sampleVideo: 'https://www.youtube.com/watch?v=kSqWpW5O7zU',
            sampleTitle: 'Bharatnatyam Tatta Adavu Practice Drill',
            lessonsCount: 7,
            learningPath: [
                {
                    id: 'bn-1',
                    name: 'Basic Posture: Araimandi & Natyarambha',
                    bols: 'Sa - Pa - Sa',
                    tempo: 'Slow (Vilamba)',
                    mudra: 'Pataka & Tripataka',
                    focus: 'Deep knee turn-out, erect torso, horizontal arm extension',
                    headEye: 'Sama Drishti (Straight gaze forward)',
                    frontAngleNote: 'Ensure thighs are parallel to ground angle at 45 degrees, feet turned outwards in 180° line.',
                    sideAngleNote: 'Spine remains straight, pelvis tucked, chest slightly lifted without arching the lower back.',
                    idealAngles: { leftKnee: 115, rightKnee: 115, leftElbow: 155, rightElbow: 155, torsoAngle: 90 },
                    steps: [
                        {
                            num: 1,
                            name: 'Araimandi Stance (Half-Sit)',
                            count: '1-2',
                            timestamp: '00:04',
                            duration: '4s',
                            difficulty: 'Fundamental',
                            desc: 'Lower the torso into a deep half-sit with heels touching and toes pointed outward at 180 degrees. Keep thighs rotated outward from hip sockets.',
                            targetPoseKey: 'araimandi_stance'
                        },
                        {
                            num: 2,
                            name: 'Natyarambha Arm Extension',
                            count: '3-4',
                            timestamp: '00:08',
                            duration: '4s',
                            difficulty: 'Fundamental',
                            desc: 'Extend both arms outward to shoulder height in Pataka mudra with elbows held firm and curved slightly forward.',
                            targetPoseKey: 'natyarambha_pose'
                        }
                    ]
                },
                {
                    id: 'bn-2',
                    name: 'Tatta Adavu (Tapping the Earth)',
                    bols: 'Tai Ya Tai Hi, Tai Ya Tai Hi',
                    tempo: 'First Speed (Prathama Kala)',
                    mudra: 'Pataka on hips or extended',
                    focus: 'Firm flat-foot stamp with full sole contact behind the body',
                    headEye: 'Alokita (sweeping rhythmic glance)',
                    frontAngleNote: 'Stamp right foot firmly with full sole while maintaining unbroken Araimandi.',
                    sideAngleNote: 'Ensure non-stamping knee does not straighten; keep center of gravity grounded.',
                    idealAngles: { leftKnee: 120, rightKnee: 95, leftElbow: 150, rightElbow: 150, torsoAngle: 88 },
                    steps: [
                        {
                            num: 1,
                            name: 'Right Foot Strike',
                            count: '1-2',
                            timestamp: '00:14',
                            duration: '3s',
                            difficulty: 'Beginner',
                            desc: 'Lift right foot slightly behind Araimandi line and strike firmly on the floor with the entire flat sole. Bol: Tai.',
                            targetPoseKey: 'tatta_right_strike'
                        },
                        {
                            num: 2,
                            name: 'Left Foot Strike',
                            count: '3-4',
                            timestamp: '00:17',
                            duration: '3s',
                            difficulty: 'Beginner',
                            desc: 'Sustain deep Araimandi, lift left foot and strike the ground squarely. Bol: Ya.',
                            targetPoseKey: 'tatta_left_strike'
                        },
                        {
                            num: 3,
                            name: 'Double Right Rhythm',
                            count: '5-6',
                            timestamp: '00:20',
                            duration: '3s',
                            difficulty: 'Beginner',
                            desc: 'Two quick rhythmic strikes on the right sole. Bol: Tai Hi.',
                            targetPoseKey: 'tatta_double_right'
                        },
                        {
                            num: 4,
                            name: 'Double Left Rhythm & Sthithi',
                            count: '7-8',
                            timestamp: '00:23',
                            duration: '3s',
                            difficulty: 'Beginner',
                            desc: 'Two matching strikes on left sole, concluding back in Samapada Araimandi.',
                            targetPoseKey: 'tatta_double_left'
                        }
                    ]
                },
                {
                    id: 'bn-3',
                    name: 'Natta Adavu (Heel & Toe Extension)',
                    bols: 'Tai Yum Tat Ta, Tai Yum Tam',
                    tempo: 'Madhyama Kala (Medium)',
                    mudra: 'Tripataka & Katakamukha',
                    focus: 'Stretching heel on floor, arm sweep in coordination with eye line',
                    headEye: 'Drishti follows the moving hand mudra',
                    frontAngleNote: 'Right heel touches floor at 45 degree angle while left leg stays in deep bent position.',
                    sideAngleNote: 'Elbows maintain shoulder line level throughout the sweep.',
                    idealAngles: { leftKnee: 110, rightKnee: 165, leftElbow: 150, rightElbow: 160, torsoAngle: 90 },
                    steps: [
                        {
                            num: 1,
                            name: 'Heel Placement Right',
                            count: '1-2',
                            timestamp: '00:28',
                            duration: '4s',
                            difficulty: 'Intermediate',
                            desc: 'Extend right leg diagonal, rest firmly on heel with toes pulled back; extend right arm to meet right knee line.',
                            targetPoseKey: 'natta_heel_right'
                        },
                        {
                            num: 2,
                            name: 'Flat Sole Rebound',
                            count: '3-4',
                            timestamp: '00:32',
                            duration: '4s',
                            difficulty: 'Intermediate',
                            desc: 'Stamp right foot flat, pull left arm to chest in Katakamukha mudra.',
                            targetPoseKey: 'natta_rebound'
                        }
                    ]
                },
                {
                    id: 'bn-4',
                    name: 'Visharu Adavu (Veeshu / Sweeping Movements)',
                    bols: 'Ta Tai Tai Ta, Dhit Tai Tai Ta',
                    tempo: 'Medium',
                    mudra: 'Alapadma & Katakamukha',
                    focus: 'Continuous circular arm arcs with side-to-side torso sway',
                    headEye: 'Sachi Drishti (Side glances matching hands)',
                    frontAngleNote: 'Arms sweep across chest horizontally before bursting open into blooming Alapadma.',
                    sideAngleNote: 'Torso rotates smoothly without tilting sideways.',
                    idealAngles: { leftKnee: 125, rightKnee: 125, leftElbow: 140, rightElbow: 140, torsoAngle: 85 },
                    steps: [
                        {
                            num: 1,
                            name: 'Sweeping Hand Arc Left to Right',
                            count: '1-2',
                            timestamp: '00:38',
                            duration: '4s',
                            difficulty: 'Intermediate',
                            desc: 'Sweep right hand across heart line and open outwards with blossom mudra.',
                            targetPoseKey: 'visharu_sweep'
                        }
                    ]
                },
                {
                    id: 'bn-5',
                    name: 'Tatti Metti (Rhythm with Heel Stamping)',
                    bols: 'Tat - Tai - Ta - Ha',
                    tempo: 'Variable (1st to 3rd speed)',
                    mudra: 'Hamsasya & Pataka',
                    focus: 'Toe touch followed by crisp heel stamp in sync with bols',
                    headEye: 'Direct forward focus with rhythmic head tilts (Attami)',
                    frontAngleNote: 'Toe taps first, followed immediately by heel drop for clear percussion sound.',
                    sideAngleNote: 'Knees flex with every heel drop to absorb shock dynamically.',
                    idealAngles: { leftKnee: 118, rightKnee: 118, leftElbow: 145, rightElbow: 145, torsoAngle: 90 },
                    steps: [
                        {
                            num: 1,
                            name: 'Toe Tap and Heel Drop',
                            count: '1-2',
                            timestamp: '00:44',
                            duration: '3s',
                            difficulty: 'Intermediate',
                            desc: 'Press right ball of foot, then strike heel forcefully down on beat 2.',
                            targetPoseKey: 'tatti_metti_step'
                        }
                    ]
                },
                {
                    id: 'bn-6',
                    name: 'Kuditta Metta (Jumping on Toes)',
                    bols: 'Tai - Ha - Tai - Hi',
                    tempo: 'Energetic',
                    mudra: 'Tripataka & Mrigashirsha',
                    focus: 'Light upward spring on balls of feet, landing firmly on heels in Araimandi',
                    headEye: 'Udvahita (Glance upwards on the jump, grounded on landing)',
                    frontAngleNote: 'Feet stay aligned symmetrically; jump occurs from the knees, not the waist.',
                    sideAngleNote: 'Keep torso vertical during the aerial phase.',
                    idealAngles: { leftKnee: 105, rightKnee: 105, leftElbow: 155, rightElbow: 155, torsoAngle: 92 },
                    steps: [
                        {
                            num: 1,
                            name: 'Aerial Spring & Heel Grounding',
                            count: '1-2',
                            timestamp: '00:50',
                            duration: '4s',
                            difficulty: 'Advanced',
                            desc: 'Spring lightly upward on both toes, then land with heels striking the ground together in Araimandi.',
                            targetPoseKey: 'kuditta_jump'
                        }
                    ]
                },
                {
                    id: 'bn-7',
                    name: 'Kattu Adavu (Locked Formations)',
                    bols: 'Tai Tai Dhit Dhit Tai',
                    tempo: 'Fast (Druta)',
                    mudra: 'Shikara & Kartarimukha',
                    focus: 'Crossed-leg Swastika stance and rapid directional locks',
                    headEye: 'Sharp directional locks',
                    frontAngleNote: 'Crossing leg behind must lock calf against shin securely.',
                    sideAngleNote: 'Balance maintained over centered hips.',
                    idealAngles: { leftKnee: 130, rightKnee: 110, leftElbow: 135, rightElbow: 160, torsoAngle: 89 },
                    steps: [
                        {
                            num: 1,
                            name: 'Swastika Stance Lock',
                            count: '1-4',
                            timestamp: '00:58',
                            duration: '5s',
                            difficulty: 'Advanced',
                            desc: 'Step right foot behind left leg into crossed Swastika posture, holding Shikara mudra steady at chest.',
                            targetPoseKey: 'kattu_lock'
                        }
                    ]
                }
            ]
        },
        {
            id: 'kathak',
            name: 'Kathak',
            icon: '💃',
            tagline: 'Rapid pirouettes (Chakkars), lyrical Tatkar footwork & Teentaal mastery',
            difficulty: 'Beginner to Advanced',
            origin: 'Uttar Pradesh, India',
            type: 'classical',
            gradient: 'linear-gradient(135deg, #c96a3f, #4a2a13)',
            description: 'North Indian classical storytelling dance renowned for crisp Ghungroo bells, lightning-fast spins (Chakkars), mathematical foot percussion (Tatkar), and subtle poetic expressions (Bhav).',
            curriculumType: 'structured_path',
            sampleVideo: 'https://www.youtube.com/watch?v=kYv_w2lR-4w',
            sampleTitle: 'Kathak Tatkar & Teentaal Speed Drills',
            lessonsCount: 6,
            learningPath: [
                {
                    id: 'kt-1',
                    name: 'Basic Stance (Anga Sadhana & Samapada)',
                    bols: 'Dha Dhin Dhin Dha',
                    tempo: 'Vilambit (Slow)',
                    mudra: 'Pataka & Ardhapataka',
                    focus: 'Upright, regal posture, relaxed shoulders, feet grounded in slight V-angle',
                    headEye: 'Eyes at horizon line with poised expression',
                    frontAngleNote: 'Spine is elongated like a string pulling upwards from the crown of the head.',
                    sideAngleNote: 'No slouching, knees soft and never hyper-locked.',
                    idealAngles: { leftKnee: 175, rightKnee: 175, leftElbow: 160, rightElbow: 160, torsoAngle: 90 },
                    steps: [
                        {
                            num: 1,
                            name: 'Samapada Foundation',
                            count: '1-4',
                            timestamp: '00:05',
                            duration: '4s',
                            difficulty: 'Beginner',
                            desc: 'Stand with feet lightly touching at heels, toes pointing outwards naturally. Hold right hand curved above chest level and left hand slightly lower.',
                            targetPoseKey: 'kathak_samapada'
                        }
                    ]
                },
                {
                    id: 'kt-2',
                    name: 'Tatkar (Teentaal Footwork Foundation)',
                    bols: 'Ta Thei Thei Tat, Aa Thei Thei Tat',
                    tempo: 'Teentaal (16 Beats)',
                    mudra: 'Hastak in Urdhva (Upper) & Madhya (Middle)',
                    focus: 'Percussive flat foot strikes alternating right-left in exact 16-beat cycle',
                    headEye: 'Direct forward focus with rhythmic neck movement (Greeva Bheda)',
                    frontAngleNote: 'Right foot begins on beat 1 (Sum), alternating crisply: Right, Left, Right, Left.',
                    sideAngleNote: 'The knees maintain a subtle micro-bend to produce sharp acoustic resonance with ghungroos.',
                    idealAngles: { leftKnee: 170, rightKnee: 140, leftElbow: 155, rightElbow: 155, torsoAngle: 90 },
                    steps: [
                        {
                            num: 1,
                            name: 'Right Foot Lead (Ta)',
                            count: '1',
                            timestamp: '00:12',
                            duration: '2s',
                            difficulty: 'Beginner',
                            desc: 'Lift right foot just two inches from ground and stamp flat down on the Sum beat. Bol: Ta.',
                            targetPoseKey: 'tatkar_right'
                        },
                        {
                            num: 2,
                            name: 'Left Rebound (Thei)',
                            count: '2',
                            timestamp: '00:14',
                            duration: '2s',
                            difficulty: 'Beginner',
                            desc: 'Immediately stamp the left foot flat in place with balanced acoustic resonance. Bol: Thei.',
                            targetPoseKey: 'tatkar_left'
                        },
                        {
                            num: 3,
                            name: 'Right Follow (Thei)',
                            count: '3',
                            timestamp: '00:16',
                            duration: '2s',
                            difficulty: 'Beginner',
                            desc: 'Second strike on right foot maintaining unbroken Teentaal tempo. Bol: Thei.',
                            targetPoseKey: 'tatkar_right_2'
                        },
                        {
                            num: 4,
                            name: 'Left Close (Tat)',
                            count: '4',
                            timestamp: '00:18',
                            duration: '2s',
                            difficulty: 'Beginner',
                            desc: 'Left foot closes the 4-count bar cleanly. Bol: Tat.',
                            targetPoseKey: 'tatkar_left_close'
                        }
                    ]
                },
                {
                    id: 'kt-3',
                    name: 'Hastak (Arm Gestures & Chest Coordination)',
                    bols: 'Dha Tra Ka Dha',
                    tempo: 'Madhyalaya',
                    mudra: 'Pataka, Katakamukha, Hamsasya',
                    focus: 'Continuous fluid arm circles radiating outward from the heart center',
                    headEye: 'Gaze travels continuously along the fingertips',
                    frontAngleNote: 'Wrists trace an elegant figure-eight curve across chest level.',
                    sideAngleNote: 'Shoulders stay down and back, preventing tension in the neck.',
                    idealAngles: { leftKnee: 175, rightKnee: 175, leftElbow: 140, rightElbow: 150, torsoAngle: 90 },
                    steps: [
                        {
                            num: 1,
                            name: 'Madhya Hastak Expansion',
                            count: '1-4',
                            timestamp: '00:25',
                            duration: '4s',
                            difficulty: 'Intermediate',
                            desc: 'Bring hands to center chest, roll wrists outwards, and expand arms to the diagonal horizons.',
                            targetPoseKey: 'hastak_expand'
                        }
                    ]
                },
                {
                    id: 'kt-4',
                    name: 'Chakkars (Pirouettes on Heel)',
                    bols: 'Tigda Digdig Tai',
                    tempo: 'Brisk (Drut)',
                    mudra: 'Right hand pointing center, left guarding hip',
                    focus: 'Spotting technique on eyes, 360-degree rotation pivoting on left heel',
                    headEye: 'Spotting on a fixed point until last millisecond of rotation',
                    frontAngleNote: 'Spotting is paramount to prevent dizziness and ensure sharp landing on Sum.',
                    sideAngleNote: 'Torso must remain vertically aligned without tipping during centrifugal spin.',
                    idealAngles: { leftKnee: 170, rightKnee: 160, leftElbow: 145, rightElbow: 165, torsoAngle: 90 },
                    steps: [
                        {
                            num: 1,
                            name: 'Preparation Stance & Spotting',
                            count: '1-2',
                            timestamp: '00:32',
                            duration: '3s',
                            difficulty: 'Intermediate',
                            desc: 'Open right foot slightly outward, lock gaze straight ahead on your spot.',
                            targetPoseKey: 'chakkar_prep'
                        },
                        {
                            num: 2,
                            name: '360° Spin & Stop on Sum',
                            count: '3-4',
                            timestamp: '00:35',
                            duration: '3s',
                            difficulty: 'Advanced',
                            desc: 'Push off right ball of foot, spin full circle on left heel, snap head back to spot, lock in place.',
                            targetPoseKey: 'chakkar_landing'
                        }
                    ]
                },
                {
                    id: 'kt-5',
                    name: 'Taal-Based Tihais & Rhythmic Triads',
                    bols: 'Dha Ge Na Tin, Ta Ke Na Dhin',
                    tempo: 'Teentaal Speed 2 (Dugun)',
                    mudra: 'Dynamic switching',
                    focus: 'Mathematical phrasing repeated 3 times to land on the 1st beat (Sum)',
                    headEye: 'Punchy eye accents on the ending of each phrase',
                    frontAngleNote: 'Footwork and hand accents synchronize with absolute microsecond precision.',
                    sideAngleNote: 'Balanced athletic stance throughout rapid shifts.',
                    idealAngles: { leftKnee: 160, rightKnee: 155, leftElbow: 145, rightElbow: 145, torsoAngle: 90 },
                    steps: [
                        {
                            num: 1,
                            name: 'First Phrase Execution',
                            count: '1-4',
                            timestamp: '00:42',
                            duration: '4s',
                            difficulty: 'Advanced',
                            desc: 'Execute rapid footwork phrase with crisp right stamp on the 4th count.',
                            targetPoseKey: 'tihai_phrase'
                        }
                    ]
                },
                {
                    id: 'kt-6',
                    name: 'Progressive Combinations & Abhinaya',
                    bols: 'Katha Kahe So Kathak Kahave',
                    tempo: 'Expressive',
                    mudra: 'All classical Hasta Mudras',
                    focus: 'Seamless integration of fast Chakkars, Tatkar, and delicate facial abhinaya',
                    headEye: 'Expressive emotive storytelling (Rasas)',
                    frontAngleNote: 'Total emotional engagement through eyes, eyebrows, and gestures.',
                    sideAngleNote: 'Graceful fluidity across all planes of movement.',
                    idealAngles: { leftKnee: 170, rightKnee: 170, leftElbow: 150, rightElbow: 150, torsoAngle: 90 },
                    steps: [
                        {
                            num: 1,
                            name: 'Storytelling Gestural Sequence',
                            count: '1-8',
                            timestamp: '00:50',
                            duration: '6s',
                            difficulty: 'Mastery',
                            desc: 'Transition from rapid footwork into a serene, sculpted storytelling stance.',
                            targetPoseKey: 'kathak_abhinaya'
                        }
                    ]
                }
            ]
        },
        {
            id: 'hiphop',
            name: 'Hip-Hop',
            icon: '🕺',
            tagline: 'Street bounce, popping, locking, body isolations & high-energy groove',
            difficulty: 'All Levels',
            origin: 'New York, USA',
            type: 'modern',
            gradient: 'linear-gradient(135deg, #ff9933, #2b1c14)',
            description: 'Dynamic urban dance built upon bounce, chest/hip isolations, party dances, breaking basics, and musicality-driven choreography that matches 8-count beat drops.',
            curriculumType: 'choreography',
            sampleVideo: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
            sampleTitle: 'Hip-Hop Groove & Bounce Choreography Drill',
            lessonsCount: 5,
            learningPath: [
                {
                    id: 'hh-1',
                    name: 'The Down Bounce & Up Bounce Foundation',
                    bols: 'Boom - Ba - Boom - Ba',
                    tempo: '85 - 95 BPM',
                    mudra: 'Relaxed street fists or open palms',
                    focus: 'Knee bounce absorbing through the floor, relaxed chest',
                    headEye: 'Confident forward eye contact',
                    frontAngleNote: 'Knees bend rhythmically with hip drop on the downbeat.',
                    sideAngleNote: 'Torso stays slightly forward, weight centered on balls of feet.',
                    idealAngles: { leftKnee: 140, rightKnee: 140, leftElbow: 120, rightElbow: 120, torsoAngle: 82 },
                    steps: [
                        {
                            num: 1,
                            name: 'Down Bounce on the Beat',
                            count: '1-2',
                            timestamp: '00:04',
                            duration: '3s',
                            difficulty: 'Beginner',
                            desc: 'Drop hips and bend both knees down on beat 1, bounce back up on the & count.',
                            targetPoseKey: 'hiphop_bounce'
                        },
                        {
                            num: 2,
                            name: 'Side Step with Chest Isolation',
                            count: '3-4',
                            timestamp: '00:08',
                            duration: '3s',
                            difficulty: 'Beginner',
                            desc: 'Step wide right, pop chest forward with relaxed shoulders, recover center.',
                            targetPoseKey: 'hiphop_chest_pop'
                        },
                        {
                            num: 3,
                            name: 'Arm Sweep and Head Tilt',
                            count: '5-6',
                            timestamp: '00:12',
                            duration: '3s',
                            difficulty: 'Intermediate',
                            desc: 'Slice right forearm across front plane, tilt head left with attitude.',
                            targetPoseKey: 'hiphop_slice'
                        },
                        {
                            num: 4,
                            name: 'Double Heel Kick & Drop',
                            count: '7-8',
                            timestamp: '00:16',
                            duration: '3s',
                            difficulty: 'Intermediate',
                            desc: 'Quick kick-ball-change on left foot, drop low into wide power stance.',
                            targetPoseKey: 'hiphop_drop'
                        }
                    ]
                }
            ]
        },
        {
            id: 'freestyle',
            name: 'FreeStyle',
            icon: '✨',
            tagline: 'Unleash spontaneous creativity, rhythm matching & fluid expression',
            difficulty: 'Open to All',
            origin: 'Global Community',
            type: 'modern',
            gradient: 'linear-gradient(135deg, #7b470e, #2b1c14)',
            description: 'Freeform improvisation where the AI tracks your groove, kinetic energy, rhythm alignment, and pose variety in real time without rigid choreography bounds.',
            curriculumType: 'improvisation',
            sampleVideo: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
            sampleTitle: 'Freestyle Flow & Creative Movement Session',
            lessonsCount: 4,
            learningPath: [
                {
                    id: 'fs-1',
                    name: 'Rhythm Entrainment & Flow States',
                    bols: 'Free Rhythm Count',
                    tempo: 'Adaptive (90-120 BPM)',
                    mudra: 'Dynamic Open Hands',
                    focus: 'Continuous full-body movement without stopping',
                    headEye: 'Free 360 degree spatial awareness',
                    frontAngleNote: 'Explore horizontal levels (high, medium, floor).',
                    sideAngleNote: 'Maintain kinetic balance through smooth transitions.',
                    idealAngles: { leftKnee: 150, rightKnee: 140, leftElbow: 130, rightElbow: 140, torsoAngle: 88 },
                    steps: [
                        {
                            num: 1,
                            name: 'Level Shift High to Low',
                            count: '1-4',
                            timestamp: '00:06',
                            duration: '4s',
                            difficulty: 'Beginner',
                            desc: 'Start tall with wide arm gestures, flow downwards into a grounded crouch while staying on beat.',
                            targetPoseKey: 'freestyle_flow'
                        }
                    ]
                }
            ]
        },
        {
            id: 'sangeet',
            name: 'Sangeet / Bollywood',
            icon: '🎉',
            tagline: 'High-octane festive energy, wedding choreography & celebratory hook steps',
            difficulty: 'Fun & Festive',
            origin: 'India / Bollywood',
            type: 'cultural',
            gradient: 'linear-gradient(135deg, #ecc8a3, #983131)',
            description: 'Festive, joy-filled celebration routines perfect for weddings, sangeet nights, and parties. Blends iconic Bollywood hook steps with Bhangra bounces and graceful expressions.',
            curriculumType: 'event_choreo',
            sampleVideo: 'https://www.youtube.com/watch?v=V7LwfY5U5WI',
            sampleTitle: 'Sangeet Wedding Entry & Celebration Hook Steps',
            lessonsCount: 5,
            learningPath: [
                {
                    id: 'sg-1',
                    name: 'The Celebration Hook Step & Thumka',
                    bols: 'Dhol Beat: Dha Dha Dha Ge Na',
                    tempo: 'Upbeat (110 BPM)',
                    mudra: 'Bhangra hands / Clapping gestures',
                    focus: 'Hip sway (Thumka), radiant smile, joyful arms waving overhead',
                    headEye: 'Bright, smiling, engaging audience glance',
                    frontAngleNote: 'Hips sway right-left with energetic shoulder shrugs.',
                    sideAngleNote: 'Posture stays upright and lively, beaming festive joy.',
                    idealAngles: { leftKnee: 155, rightKnee: 155, leftElbow: 130, rightElbow: 130, torsoAngle: 90 },
                    steps: [
                        {
                            num: 1,
                            name: 'Right Hip Thumka & Arm Wave',
                            count: '1-2',
                            timestamp: '00:05',
                            duration: '3s',
                            difficulty: 'Beginner',
                            desc: 'Push right hip outward while waving right wrist above head, beaming a festive smile.',
                            targetPoseKey: 'sangeet_thumka'
                        },
                        {
                            num: 2,
                            name: 'Left Hip Thumka & Switch',
                            count: '3-4',
                            timestamp: '00:08',
                            duration: '3s',
                            difficulty: 'Beginner',
                            desc: 'Shift weight immediately to left hip with matching overhead flourish.',
                            targetPoseKey: 'sangeet_left_thumka'
                        },
                        {
                            num: 3,
                            name: 'Bhangra Shoulder Bounce',
                            count: '5-6',
                            timestamp: '00:12',
                            duration: '3s',
                            difficulty: 'Beginner',
                            desc: 'Both hands up at 45 degrees, bounce on balls of feet with joyful shoulder rolls.',
                            targetPoseKey: 'sangeet_bhangra'
                        },
                        {
                            num: 4,
                            name: 'Namaste Celebration Spin',
                            count: '7-8',
                            timestamp: '00:16',
                            duration: '3s',
                            difficulty: 'Beginner',
                            desc: 'Spin 360 degrees gracefully and land facing front with folded hands or energetic clap.',
                            targetPoseKey: 'sangeet_spin'
                        }
                    ]
                }
            ]
        },
        {
            id: 'western',
            name: 'Western / Contemporary',
            icon: '🩰',
            tagline: 'Lyrical lines, balance extensions, floor sweeps & modern jazz dynamism',
            difficulty: 'Intermediate',
            origin: 'Europe / USA',
            type: 'contemporary',
            gradient: 'linear-gradient(135deg, #a15c1e, #5b3417)',
            description: 'Fluid contemporary, lyrical, and jazz technique focusing on long lines, core balance, expressive floor recovery, controlled leg extensions, and emotional breathwork.',
            curriculumType: 'contemporary_technique',
            sampleVideo: 'https://www.youtube.com/watch?v=bo_efYhYU2A',
            sampleTitle: 'Contemporary Lyrical Lines & Core Extension',
            lessonsCount: 5,
            learningPath: [
                {
                    id: 'ws-1',
                    name: 'Arabesque Line & Floor Reach',
                    bols: 'Count: 1-2-3-4-5-6-7-8',
                    tempo: 'Slow Lyrical (72 BPM)',
                    mudra: 'Soft elongated fingers',
                    focus: 'Extended rear leg, elongated neck, counterbalance in torso',
                    headEye: 'Gaze extending past the fingertips into infinity',
                    frontAngleNote: 'Supporting leg straight, chest open without twisting.',
                    sideAngleNote: 'Rear leg lifted to minimum 45 degrees without dumping in lower back.',
                    idealAngles: { leftKnee: 175, rightKnee: 165, leftElbow: 170, rightElbow: 165, torsoAngle: 75 },
                    steps: [
                        {
                            num: 1,
                            name: 'Lyrical Plié into Extension',
                            count: '1-4',
                            timestamp: '00:06',
                            duration: '4s',
                            difficulty: 'Intermediate',
                            desc: 'Soft plié on left leg, sweep right leg back into an extended arabesque line while floating right arm forward.',
                            targetPoseKey: 'western_arabesque'
                        }
                    ]
                }
            ]
        }
    ],

    // Target reference 2D/3D landmarks (normalized 0-1 range) for skeleton rendering & scoring
    targetPoses: {
        'araimandi_stance': {
            name: 'Araimandi (Half-Sit)',
            keypoints: {
                nose: { x: 0.5, y: 0.2 },
                leftShoulder: { x: 0.42, y: 0.32 },
                rightShoulder: { x: 0.58, y: 0.32 },
                leftElbow: { x: 0.35, y: 0.42 },
                rightElbow: { x: 0.65, y: 0.42 },
                leftWrist: { x: 0.38, y: 0.5 },
                rightWrist: { x: 0.62, y: 0.5 },
                leftHip: { x: 0.45, y: 0.55 },
                rightHip: { x: 0.55, y: 0.55 },
                leftKnee: { x: 0.38, y: 0.72 },
                rightKnee: { x: 0.62, y: 0.72 },
                leftAnkle: { x: 0.48, y: 0.88 },
                rightAnkle: { x: 0.52, y: 0.88 }
            },
            checks: [
                { joint: 'knees', targetAngle: 115, tolerance: 20, tip: 'Bend your knees further outward into half-sit (Araimandi)' },
                { joint: 'torso', targetAngle: 90, tolerance: 10, tip: 'Keep your spine erect and chest centered' },
                { joint: 'feet', targetAngle: 180, tolerance: 25, tip: 'Turn your feet outward in a 180° line' }
            ]
        },
        'natyarambha_pose': {
            name: 'Natyarambha (Arm Extension)',
            keypoints: {
                nose: { x: 0.5, y: 0.2 },
                leftShoulder: { x: 0.42, y: 0.32 },
                rightShoulder: { x: 0.58, y: 0.32 },
                leftElbow: { x: 0.28, y: 0.34 },
                rightElbow: { x: 0.72, y: 0.34 },
                leftWrist: { x: 0.16, y: 0.36 },
                rightWrist: { x: 0.84, y: 0.36 },
                leftHip: { x: 0.45, y: 0.55 },
                rightHip: { x: 0.55, y: 0.55 },
                leftKnee: { x: 0.38, y: 0.72 },
                rightKnee: { x: 0.62, y: 0.72 },
                leftAnkle: { x: 0.48, y: 0.88 },
                rightAnkle: { x: 0.52, y: 0.88 }
            },
            checks: [
                { joint: 'leftElbow', targetAngle: 155, tolerance: 15, tip: 'Raise left elbow to shoulder height' },
                { joint: 'rightElbow', targetAngle: 155, tolerance: 15, tip: 'Raise right elbow to shoulder height' },
                { joint: 'knees', targetAngle: 115, tolerance: 20, tip: 'Maintain deep Araimandi while holding arms' }
            ]
        },
        'tatta_right_strike': {
            name: 'Tatta Right Foot Strike',
            keypoints: {
                nose: { x: 0.5, y: 0.2 },
                leftShoulder: { x: 0.42, y: 0.32 },
                rightShoulder: { x: 0.58, y: 0.32 },
                leftElbow: { x: 0.32, y: 0.36 },
                rightElbow: { x: 0.68, y: 0.36 },
                leftWrist: { x: 0.22, y: 0.42 },
                rightWrist: { x: 0.78, y: 0.42 },
                leftHip: { x: 0.45, y: 0.55 },
                rightHip: { x: 0.55, y: 0.55 },
                leftKnee: { x: 0.4, y: 0.72 },
                rightKnee: { x: 0.66, y: 0.68 },
                leftAnkle: { x: 0.44, y: 0.88 },
                rightAnkle: { x: 0.68, y: 0.84 }
            },
            checks: [
                { joint: 'rightFoot', targetAngle: 95, tolerance: 15, tip: 'Stamp your right foot flat on the beat' },
                { joint: 'leftKnee', targetAngle: 120, tolerance: 20, tip: 'Do not straighten the supporting left knee' }
            ]
        },
        'tatkar_right': {
            name: 'Tatkar Right Stamp (Kathak)',
            keypoints: {
                nose: { x: 0.5, y: 0.18 },
                leftShoulder: { x: 0.44, y: 0.3 },
                rightShoulder: { x: 0.56, y: 0.3 },
                leftElbow: { x: 0.38, y: 0.42 },
                rightElbow: { x: 0.62, y: 0.42 },
                leftWrist: { x: 0.45, y: 0.48 },
                rightWrist: { x: 0.55, y: 0.48 },
                leftHip: { x: 0.46, y: 0.54 },
                rightHip: { x: 0.54, y: 0.54 },
                leftKnee: { x: 0.47, y: 0.74 },
                rightKnee: { x: 0.57, y: 0.70 },
                leftAnkle: { x: 0.48, y: 0.92 },
                rightAnkle: { x: 0.56, y: 0.88 }
            },
            checks: [
                { joint: 'torso', targetAngle: 90, tolerance: 8, tip: 'Keep your spine straight and shoulders relaxed' },
                { joint: 'rightFoot', targetAngle: 90, tolerance: 15, tip: 'Strike the ground firmly with full right sole' }
            ]
        },
        'hiphop_bounce': {
            name: 'Hip-Hop Down Bounce',
            keypoints: {
                nose: { x: 0.5, y: 0.22 },
                leftShoulder: { x: 0.41, y: 0.34 },
                rightShoulder: { x: 0.59, y: 0.34 },
                leftElbow: { x: 0.34, y: 0.46 },
                rightElbow: { x: 0.66, y: 0.46 },
                leftWrist: { x: 0.40, y: 0.54 },
                rightWrist: { x: 0.60, y: 0.54 },
                leftHip: { x: 0.44, y: 0.58 },
                rightHip: { x: 0.56, y: 0.58 },
                leftKnee: { x: 0.40, y: 0.75 },
                rightKnee: { x: 0.60, y: 0.75 },
                leftAnkle: { x: 0.42, y: 0.92 },
                rightAnkle: { x: 0.58, y: 0.92 }
            },
            checks: [
                { joint: 'knees', targetAngle: 140, tolerance: 20, tip: 'Sink deeper into your knees to catch the bounce' },
                { joint: 'chest', targetAngle: 82, tolerance: 12, tip: 'Lean slightly forward with chest relaxed' }
            ]
        },
        'sangeet_thumka': {
            name: 'Sangeet Festive Thumka',
            keypoints: {
                nose: { x: 0.49, y: 0.19 },
                leftShoulder: { x: 0.42, y: 0.32 },
                rightShoulder: { x: 0.58, y: 0.30 },
                leftElbow: { x: 0.34, y: 0.42 },
                rightElbow: { x: 0.70, y: 0.22 },
                leftWrist: { x: 0.42, y: 0.48 },
                rightWrist: { x: 0.74, y: 0.14 },
                leftHip: { x: 0.44, y: 0.55 },
                rightHip: { x: 0.62, y: 0.56 },
                leftKnee: { x: 0.45, y: 0.74 },
                rightKnee: { x: 0.61, y: 0.73 },
                leftAnkle: { x: 0.46, y: 0.91 },
                rightAnkle: { x: 0.58, y: 0.91 }
            },
            checks: [
                { joint: 'rightHip', targetAngle: 110, tolerance: 15, tip: 'Accentuate your right hip pop (Thumka)' },
                { joint: 'rightArm', targetAngle: 140, tolerance: 20, tip: 'Wave your right wrist with joyful flourish overhead' }
            ]
        }
    },

    // Quiz Questions Bank
    quizQuestions: [
        {
            id: 1,
            question: 'What is the fundamental half-sitting posture in Bharatnatyam called?',
            options: ['Samapada', 'Araimandi', 'Muzhumandi', 'Swastika'],
            answer: 1,
            explanation: 'Araimandi (also known as Ayatham) is the half-sitting posture where knees are bent outwards and heels touch in a straight line.'
        },
        {
            id: 2,
            question: 'In Kathak, what are the primary rhythmic footwork syllables known as?',
            options: ['Tatkar', 'Adavu', 'Ghungroo', 'Chakkar'],
            answer: 0,
            explanation: 'Tatkar refers to the footwork pattern executed to rhythmic bols like "Ta Thei Thei Tat, Aa Thei Thei Tat".'
        },
        {
            id: 3,
            question: 'How many beats are there in the classical Teentaal cycle?',
            options: ['12 beats', '14 beats', '16 beats', '8 beats'],
            answer: 2,
            explanation: 'Teentaal consists of 16 beats divided into 4 equal vibhags (bars) of 4 beats each: Dha Dhin Dhin Dha | Dha Dhin Dhin Dha | Dha Tin Tin Ta | Ta Dhin Dhin Dha.'
        },
        {
            id: 4,
            question: 'Which hand mudra is commonly used with all four fingers open and thumb bent in Natyarambha?',
            options: ['Pataka', 'Tripataka', 'Shikara', 'Alapadma'],
            answer: 0,
            explanation: 'Pataka (flag) is the first Asamyutta (single hand) mudra where all fingers are held straight and close together with the thumb bent slightly inward.'
        },
        {
            id: 5,
            question: 'What does "BPM" stand for in modern dance and music synchronization?',
            options: ['Beats Per Measure', 'Beats Per Minute', 'Body Posture Movement', 'Bass Percussion Modulation'],
            answer: 1,
            explanation: 'BPM stands for Beats Per Minute, the standard measurement of music tempo and rhythm.'
        },
        {
            id: 6,
            question: 'What is a "Chakkar" in Kathak terminology?',
            options: ['A hand gesture', 'A rapid pirouette or spin on the heel', 'A neck movement', 'An eye glance'],
            answer: 1,
            explanation: 'A Chakkar is a rapid 360-degree pirouette executed cleanly on the heel with precise spotting.'
        },
        {
            id: 7,
            question: 'In Hip-Hop, what foundational element gives movement its continuous rhythmic groove?',
            options: ['The Bounce (Down & Up)', 'Static Balance', 'High Arabesque', 'Mudra Lock'],
            answer: 0,
            explanation: 'The bounce—absorbing through the knees on or off the beat—forms the core groove and heartbeat of Hip-Hop dance.'
        }
    ],

    // Leaderboard Seed Data
    leaderboard: [
        { rank: 1, name: 'Aarav Sharma', xp: 2850, streak: 14, lessonsCompleted: 24, badge: '🏆 Guru' },
        { rank: 2, name: 'Priya Sundaram', xp: 2420, streak: 11, lessonsCompleted: 19, badge: '🥇 Natya Star' },
        { rank: 3, name: 'Rohan Mehta', xp: 2190, streak: 9, lessonsCompleted: 17, badge: '🥈 Rhythm Master' },
        { rank: 4, name: 'Ananya Rao', xp: 1940, streak: 8, lessonsCompleted: 15, badge: '🥉 Adavu Pro' },
        { rank: 5, name: 'Kabir Verma', xp: 1680, streak: 6, lessonsCompleted: 12, badge: '⭐ Rising Dancer' },
        { rank: 6, name: 'Diya Patel', xp: 1450, streak: 5, lessonsCompleted: 10, badge: '⭐ Rising Dancer' },
        { rank: 7, name: 'Siddharth Iyer', xp: 1220, streak: 4, lessonsCompleted: 8, badge: '🌱 Learner' }
    ]
};

// Export to window for global browser availability
if (typeof window !== 'undefined') {
    window.DANCE_DATA = DANCE_DATA;
}
