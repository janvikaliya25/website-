

function pr(){
        fetch("http://localhost:3000/items")
        .then((res)=>{
                return res.json()       
        })
        .then((res)=>{
             document.getElementById("product").innerHTML=   add(res)
        })
        .catch((err)=>{
                console.log(err)
        })
}
pr()

function add(data){
        return data.map((el,i)=>{
                return `
                <div id="card" >
                   <div id="img">
                     <img src="${el.img}">
                   </div>
                   <div id="detail">
                      <div id="info">
                       <h5 id="title">${el.title}</h5>
                       <p id="rate"><i class="fa-solid fa-star" id="icon"></i> ${el.rate}</p>
                       </div>
                       <h6 id="price">$${el.price}</h6>
                       <button onclick="cart(${el.id})" id="btn">Add to Cart</button>
                   </div>
                </div>
                `
        }).join("")
}

function cart(id){
        fetch(`http://localhost:3000/items/${id}`)
        .then((res)=>{
                return res.json()
        })
        .then((res)=>{
                fetch("http://localhost:3000/cart",{
                        method:"POST",
                        headers:{
                                "Content-Type":"application/json"
                        },
                        body:JSON.stringify(res)
                })
                .then((res)=>{
                        return res.json()
                })
                .then((res)=>{
                        console.log(res)
                })
                .catch((err)=>{
                        console.log(err)
                })
        })
        .catch((err)=>{
                console.log(err)
        })
        window.location.href="cart.html"
}