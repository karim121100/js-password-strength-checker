function checkStrength() {
  const pass = document.getElementById("password").value;
  let strength = "Weak";

  if (pass.length >= 8 && /[A-Z]/.test(pass) && /[0-9]/.test(pass)) {
    strength = "Strong";
  } else if (pass.length >= 6) {
    strength = "Medium";
  }

  document.getElementById("strength").textContent = "Strength: " + strength;
}
