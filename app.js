/**
 * app.js - Nritya AI Core Application Controller
 * Handles user authentication (LocalStorage), gamification (XP/Streaks),
 * AI Tutor "Nritya" voice synthesis, chat assistant, and global UI state.
 */

class NrityaApp {
    constructor() {
        this.storageKeyUser = 'nritya_ai_user';
        this.storageKeyProgress = 'nritya_ai_progress';
        this.currentUser = this.loadUser();
        this.synth = window.speechSynthesis || null;
        this.voiceEnabled = true;
        
        // Tutor dialogues
        this.tutorQuotes = [
            "Great job! Try that step once more with focused energy.",
            "Keep your right knee slightly bent and ground your weight.",
            "Your hand position is correct. Now focus on your footwork!",
            "Excellent! Your posture improved significantly.",
            "Breathe with the rhythm. Dance is geometry in motion.",
            "Feel the beat through your feet before you execute the next move."
        ];
    }

    /**
     * Loads user profile from LocalStorage or returns null
     */
    loadUser() {
        try {
            const raw = localStorage.getItem(this.storageKeyUser);
            return raw ? JSON.parse(raw) : null;
        } catch (e) {
            return null;
        }
    }

    /**
     * Saves user to LocalStorage
     */
    saveUser(user) {
        this.currentUser = user;
        try {
            localStorage.setItem(this.storageKeyUser, JSON.stringify(user));
        } catch (e) {}
        this.updateHeaderAuthUI();
    }

    /**
     * Login handler with LocalStorage lookup
     */
    login(email, password) {
        if (!email || !password) {
            return { success: false, message: 'Please enter both email and password.' };
        }

        // Check if existing user stored
        let user = this.loadUser();
        if (user && user.email.toLowerCase() === email.toLowerCase()) {
            user.lastLogin = new Date().toISOString();
            this.saveUser(user);
            return { success: true, user };
        }

        // Create session for user
        const newUser = {
            name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ') || 'Dancer',
            email: email,
            mobile: '9876543210',
            xp: 450,
            streak: 3,
            completedLessons: ['bn-1'],
            joinedAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
        };
        this.saveUser(newUser);
        return { success: true, user: newUser };
    }

    /**
     * Quick Demo Login for instant 1-click evaluation
     */
    demoLogin() {
        const demoUser = {
            name: 'Ananya Sharma',
            email: 'ananya@nritya.ai',
            mobile: '9876543210',
            xp: 620,
            streak: 5,
            completedLessons: ['bn-1', 'kt-1'],
            joinedAt: '2026-08-15T10:00:00.000Z',
            lastLogin: new Date().toISOString()
        };
        this.saveUser(demoUser);
        return demoUser;
    }

    /**
     * Sign Up handler
     */
    signup({ name, mobile, email, password, confirmPassword }) {
        if (!name || !email || !password) {
            return { success: false, message: 'Please fill in all required fields.' };
        }
        if (password !== confirmPassword) {
            return { success: false, message: 'Passwords do not match.' };
        }
        if (mobile && !/^\d{10}$/.test(mobile.replace(/\D/g, ''))) {
            return { success: false, message: 'Please enter a valid 10-digit mobile number.' };
        }

        const user = {
            name: name.trim(),
            mobile: mobile.trim(),
            email: email.trim().toLowerCase(),
            xp: 150, // Welcome bonus
            streak: 1,
            completedLessons: [],
            joinedAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
        };

        this.saveUser(user);
        return { success: true, user };
    }

    /**
     * Logout handler
     */
    logout() {
        this.currentUser = null;
        localStorage.removeItem(this.storageKeyUser);
        this.updateHeaderAuthUI();
        window.location.href = 'index1.html';
    }

    /**
     * Awards XP to current user
     */
    addXP(amount, reason = 'Practice completion') {
        if (!this.currentUser) return;
        this.currentUser.xp = (this.currentUser.xp || 0) + amount;
        this.saveUser(this.currentUser);
        this.showToast(`✨ +${amount} XP Earned! (${reason})`);
    }

    /**
     * Records a completed lesson
     */
    markLessonComplete(lessonId) {
        if (!this.currentUser) return;
        this.currentUser.completedLessons = this.currentUser.completedLessons || [];
        if (!this.currentUser.completedLessons.includes(lessonId)) {
            this.currentUser.completedLessons.push(lessonId);
            this.addXP(100, 'Lesson Completed');
        }
    }

    /**
     * Dynamic Header update according to login state
     */
    updateHeaderAuthUI() {
        const headerActions = document.querySelector('.header-actions');
        if (!headerActions) return;

        if (this.currentUser) {
            headerActions.innerHTML = `
                <div class="user-pill">
                    <span class="user-avatar">💃</span>
                    <span class="user-name">${this.currentUser.name}</span>
                    <span class="user-xp">⭐ ${this.currentUser.xp || 0} XP</span>
                </div>
                <button onclick="window.nrityaApp.logout()" class="btn-logout" title="Sign out">Log out</button>
            `;
        } else {
            headerActions.innerHTML = `
                <a href="Login.html" class="btn">Log in</a>
                <a href="SignUp.html" class="btn-signing">Sign up</a>
            `;
        }
    }

    /**
     * Text-to-Speech synthesis for AI Tutor "Nritya"
     */
    speak(text) {
        if (!this.voiceEnabled || !this.synth) return;
        try {
            this.synth.cancel(); // cancel previous utterance
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.95; // graceful, instructional tempo
            utterance.pitch = 1.05;

            // Pick a good English or Indian voice if available
            const voices = this.synth.getVoices();
            const voice = voices.find(v => v.lang.includes('en-IN')) || 
                          voices.find(v => v.name.includes('Female') || v.name.includes('Natural')) || 
                          voices[0];
            if (voice) utterance.voice = voice;

            this.synth.speak(utterance);
        } catch (e) {
            console.warn('Speech synthesis unavailable', e);
        }
    }

    /**
     * Speaks a random motivational tutor quote
     */
    speakRandomTutorAdvice() {
        const quote = this.tutorQuotes[Math.floor(Math.random() * this.tutorQuotes.length)];
        this.speak(quote);
        return quote;
    }

    /**
     * AI Tutor Chat Assistant - answers student queries
     */
    askTutor(question) {
        const q = question.toLowerCase();

        if (q.includes('how do i do') || q.includes('this step') || q.includes('help')) {
            return "Focus on three key anchors: first, ground your foot placement; second, lift your elbows parallel to the floor; third, keep your spine tall like a string pulling you upward from your crown. Practice at half speed first!";
        } else if (q.includes('araimandi') || q.includes('half sit')) {
            return "Araimandi requires rotating your thighs outward from the hip joints with knees bent at ~115 degrees. Make sure your feet form a straight line and heels remain firmly planted.";
        } else if (q.includes('count') || q.includes('beat') || q.includes('rhythm')) {
            return "Count out loud: '1-and-2-and'. Striking the ground on the downbeat ('1') and recovering on the upbeat ('and') keeps your body synchronized with the music.";
        } else if (q.includes('tatkar') || q.includes('kathak')) {
            return "In Tatkar, keep your knees slightly loose so the Ghungroo bells produce crisp, acoustic resonance. Alternate: Right, Left, Right, Left to the syllables 'Ta Thei Thei Tat'.";
        } else if (q.includes('hip hop') || q.includes('bounce')) {
            return "In Hip-Hop, the groove comes from your core and knees. Let your weight sink into the ground on every beat drop instead of staying stiff.";
        } else if (q.includes('hand') || q.includes('mudra') || q.includes('arm')) {
            return "Keep your elbows held high and never allow them to droop. Energy in classical Indian dance radiates outward all the way to your fingertips!";
        } else {
            return `I'm Nritya, your AI dance coach! For this step, concentrate on posture balance, soft knee flexion, and matching the rhythm count. Try it once more in front of your camera!`;
        }
    }

    /**
     * Displays a modern toast alert in bottom right
     */
    showToast(message, type = 'info') {
        let container = document.getElementById('nritya-toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'nritya-toast-container';
            container.style.cssText = `
                position: fixed;
                bottom: 24px;
                right: 24px;
                z-index: 10000;
                display: flex;
                flex-direction: column;
                gap: 10px;
                pointer-events: none;
            `;
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `nritya-toast ${type}`;
        toast.style.cssText = `
            background: rgba(30, 16, 5, 0.95);
            color: #fdfbf7;
            border: 1px solid #ff9933;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            padding: 12px 20px;
            border-radius: 30px;
            font-size: 0.95rem;
            display: flex;
            align-items: center;
            gap: 10px;
            backdrop-filter: blur(8px);
            animation: slideInToast 0.3s ease-out forwards;
            pointer-events: auto;
        `;
        toast.innerHTML = message;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

    /**
     * Opens the Invite Friends modal
     */
    openInviteModal() {
        let modal = document.getElementById('invite-friends-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'invite-friends-modal';
            modal.className = 'modal-backdrop';
            modal.innerHTML = `
                <div class="modal-card">
                    <button class="modal-close" onclick="document.getElementById('invite-friends-modal').classList.remove('active')">&times;</button>
                    <div class="modal-icon">💌</div>
                    <h2>Invite a Friend to Nritya AI</h2>
                    <p>Dance is even better with friends. Share your unique invite link and earn <strong>+150 XP</strong> when your friend joins their first practice session!</p>
                    
                    <div class="invite-link-box">
                        <input type="text" id="invite-link-input" readonly value="https://nritya-ai.app/join?ref=${this.currentUser ? this.currentUser.name.toLowerCase().replace(/\s+/g, '-') : 'dancer'}-2026">
                        <button onclick="window.nrityaApp.copyInviteLink()" class="btn-copy">Copy Link</button>
                    </div>

                    <div class="invite-social-btns">
                        <button onclick="window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent('Join me on Nritya AI and let\\'s learn dance together! https://nritya-ai.app'), '_blank')" class="btn-social whatsapp">WhatsApp</button>
                        <button onclick="window.nrityaApp.copyInviteLink()" class="btn-social share">Share Link</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }
        modal.classList.add('active');
    }

    copyInviteLink() {
        const input = document.getElementById('invite-link-input');
        if (input) {
            input.select();
            navigator.clipboard.writeText(input.value);
            this.showToast('📋 Invite link copied to clipboard!');
        }
    }
}

// Global instance
window.nrityaApp = new NrityaApp();

// Automatic header initialization upon DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    window.nrityaApp.updateHeaderAuthUI();

    // Wire up Get Started buttons
    document.querySelectorAll('.btn-get-started-route, .btn-signing-main').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.nrityaApp.currentUser) {
                window.location.href = 'tutor.html';
            } else {
                window.location.href = 'Login.html';
            }
        });
    });
});
