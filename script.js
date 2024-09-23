// Modal Elements
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const closeLogin = document.getElementById("closeLogin");
const closeSignup = document.getElementById("closeSignup");

// Open login modal
loginBtn.addEventListener("click", () => {
    loginModal.style.display = "flex";
});

// Open signup modal
signupBtn.addEventListener("click", () => {
    signupModal.style.display = "flex";
});

// Close login modal
closeLogin.addEventListener("click", () => {
    loginModal.style.display = "none";
});

// Close signup modal
closeSignup.addEventListener("click", () => {
    signupModal.style.display = "none";
});

// Close modal when clicking outside of content
window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target === signupModal) {
        signupModal.style.display = "none";
    }
});

// Form submission behavior (for demo purposes)
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login functionality not implemented yet!");
    loginModal.style.display = "none";
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Signup functionality not implemented yet!");
    signupModal.style.display = "none";
});
