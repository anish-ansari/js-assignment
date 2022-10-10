class Login {
  validator(email, password) {
    return email == "anishansari489@gmail.com" && password == "1234567890"
      ? "Login Success"
      : "Login Failed";
  }
}

let email = "anishansari489@gmail.com",
  password = "1234567890",
  user = new Login();

console.log(user.validator(email, password));
