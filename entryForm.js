
async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    body: new URLSearchParams({
      action: "login",
      username,
      password
    })
  });
  const text = await res.text();
  if (text.trim() === "success") {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("main-app").style.display = "block";
    showTab('dashboard');
  } else {
    document.getElementById("login-error").innerText = "Invalid credentials";
  }
}
