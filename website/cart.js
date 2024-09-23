fetch("http://localhost:3000/cart")
.then((res)=>{
    return res.json()
})
.then((res)=>{
   document.getElementById("cart").innerHTML=add(res)
})
.catch((err)=>{
    console.log(err)
})

function add(data){
    return data.map((el,i)=>{
        return `
        
           <div id="info">
                <div id="img"><img src="${el.img}" alt=""></div>
                <div id="pr">
                    <h6>${el.title}</h6>
                    <p>${el.price}</p>
                    <button id="btn">Remove</button>
                </div>
            </div>
        `
    }).join("")
}