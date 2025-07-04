function checkPassword() {
  const correctPassword = "43-237-280-29170";
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("error-message");

  if (input === correctPassword) {
    document.getElementById("password-container").style.display = "none";
    document.getElementById("protected-text").style.display = "block";
  } else {
    error.textContent = "パスワードが間違っています。";
  }
}
