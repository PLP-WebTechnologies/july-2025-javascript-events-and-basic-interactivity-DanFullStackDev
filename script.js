// ===== Dark/Light Mode Toggle =====
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// ===== Click Counter =====
let count = 0;
const countBtn = document.getElementById("count-btn");
const countDisplay = document.getElementById("count");

countBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// ===== Collapsible FAQ =====
const questions = document.querySelectorAll(".question");
questions.forEach((q) => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("active");
  });
});

// ===== Form Validation =====
const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form submission
  let valid = true;

  // Clear previous messages
  document.querySelectorAll(".error").forEach(err => err.textContent = "");
  document.getElementById("success-message").textContent = "";

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("name-error").textContent = "Name must be at least 3 characters";
    valid = false;
  }

  // Email validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("email-error").textContent = "Enter a valid email address";
    valid = false;
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("password-error").textContent = "Password must be at least 6 characters";
    valid = false;
  }

  // Success
  if (valid) {
    document.getElementById("success-message").textContent = "Form submitted successfully!";
    form.reset();
  }
});
