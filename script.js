// WELCOME
alert("Welcome to Peter John Dave's Galaxy Portfolio!");

// AGE CALCULATOR
const birthDate = new Date("2005-02-25");
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--;
document.getElementById("age-value").textContent = age;

// TYPING ANIMATION
const roles = ["Web Developer", "IT Student", "Problem Solver"];
let roleIndex = 0, charIndex = 0, isDeleting = false;
const roleElement = document.getElementById("role-text");

function typeEffect() {
    const currentRole = roles[roleIndex];
    roleElement.textContent = isDeleting
        ? currentRole.substring(0, charIndex - 1)
        : currentRole.substring(0, charIndex + 1);
    isDeleting ? charIndex-- : charIndex++;
    if (!isDeleting && charIndex === currentRole.length) setTimeout(() => { isDeleting = true; }, 1500);
    else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; }
    setTimeout(typeEffect, isDeleting ? 60 : 100);
}
typeEffect();

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});

// SCROLL REVEAL
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
}, { threshold: 0.1 });
document.querySelectorAll(".card").forEach(card => observer.observe(card));

// ACTIVE NAV
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => { if (window.scrollY >= section.offsetTop - 80) current = section.getAttribute("id"); });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) link.classList.add("active");
    });
});

// THEME TOGGLE
const toggleBtn = document.getElementById("mode-toggle");
const modeLabel = document.getElementById("mode-label");
toggleBtn.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
    modeLabel.textContent = document.body.classList.contains("light-mode") ? "🚀 Space Mode" : "☀️ Light Mode";
});

// PROGRESS BARS
document.querySelectorAll(".fill").forEach(bar => {
    setTimeout(() => { bar.style.width = bar.getAttribute("data-width"); }, 500);
});

// BACK TO TOP
const backTop = document.getElementById("back-top");
window.addEventListener("scroll", () => { backTop.style.display = window.scrollY > 300 ? "block" : "none"; });
backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// COPY EMAIL
const email = "lobedurialjohn@gmail.com";
document.querySelectorAll("p").forEach(p => {
    if (p.textContent.includes(email)) {
        p.style.cursor = "pointer";
        p.title = "Click to copy email";
        p.addEventListener("click", () => { navigator.clipboard.writeText(email); alert("Email copied!"); });
    }
});

// CUSTOM CURSOR
const cursor = document.createElement("div");
cursor.id = "custom-cursor";
document.body.appendChild(cursor);
document.addEventListener("mousemove", (e) => { cursor.style.left = e.clientX + "px"; cursor.style.top = e.clientY + "px"; });
document.addEventListener("mousedown", () => cursor.classList.add("click"));
document.addEventListener("mouseup", () => cursor.classList.remove("click"));
