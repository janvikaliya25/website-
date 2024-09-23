


document.getElementById("form").addEventListener("submit", (a) => {
  a.preventDefault()

  let i = true

  let first = document.getElementById("first").value
  let last = document.getElementById("last").value
  let email = document.getElementById("email").value
  let pass = document.getElementById("pass").value



  if (first == "") {
    document.getElementById("fname").innerHTML = "Please enter the first name"
    i = false;
  }
  if (last == "") {
    document.getElementById("lname").innerHTML = "Please enter the first name"
    i = false;
  }
  if (email == "") {
    document.getElementById("em").innerHTML = "Please enter the email address"
    i = false;
  }
  if (pass.length < 6) {
    document.getElementById("lenght").innerHTML = "Please enter the password more then 6 digit"
    i = false;
  }
  if (i) {

    let obj = {
      first: first,
      last: last,
      email: email,
      pass: pass
    }

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })


  }
  document.getElementById("first").value=""
  document.getElementById("last").value=""
  document.getElementById("email").value=""
  document.getElementById("pass").value=""
  window.location.href="index.html"
})

