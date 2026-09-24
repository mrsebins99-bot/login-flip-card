function login() {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (username === "admin" && password === "1234") {

    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");

    document.getElementById("userDisplay").textContent = username;

  } else {

    message.textContent = "Incorrect username or password.";

  }
}


function flipCard(card) {
  card.classList.toggle("flipped");
}


function logout() {

  document.getElementById("mainPage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

}
