document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const role = document.getElementById('role').value;
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (!role || !username || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Fake login logic for demo
  // Replace with real backend validation
  if (username === "admin" && password === "admin123" && role === "admin") {
    window.location.href = "admin-dashboard.html";
  } else if (username === "member" && password === "member123" && role === "member") {
    window.location.href = "member-dashboard.html";
  } else if (username === "guest" && password === "guest123" && role === "guest") {
    window.location.href = "guest-dashboard.html";
  } else {
    alert("Invalid credentials or role.");
  }
});
