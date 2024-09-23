document.querySelector("button").addEventListener("click",()=>{
    var a=document.getElementById("in1").value;
    var b=document.getElementById("in2").value;

    if(a == "")
    {
       document.getElementById("er1").innerText="Enter is Required. Please enter the valid Email Address" 
    }
    
    if(b=="")
    {
        document.getElementById("er2").innerText="Please enter the valid password"
    }

    fetch(`http://localhost:3000/user?email=${a}`)
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          if(res.lenght==0){
     alert("email is not valid")
          }
          else{
            if(res[0].pass==b)
            {
                alert("login successfull..")
                window.location.href="index.html"
            }
            else{
                alert("password is wrong..")
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })


    
})