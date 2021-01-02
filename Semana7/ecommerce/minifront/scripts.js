let form = document.getElementById("login");

let btnProductos = document.getElementById("pedirproductos");

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let objLogin = {
    email:form[type="email"].value,
    password:form[type="pass"].value
  }
  // console.log({objLogin})

  let cabecera = {
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify(objLogin)
  }


  fetch("http://localhost:8000/login",cabecera)
  .then(data => {
    return data.json()
  })
  .then(rpta => {
    localStorage.removeItem("token");
    localStorage.setItem("token",rpta.token)
    return console.log(rpta)
  })
  .catch(err => console.log(err))
})

btnProductos.addEventListener("click",()=>{
  let token = localStorage.getItem("token")
  console.log(token)
  let cabecera = {
    method:'GET',
    headers:{
      'Content-type':'application/json',
      'Authorization':`Bearer ${token}`
    },
    
  }
  fetch('http://localhost:8000/producto',cabecera)
  .then(rpta => {
    // console.log({rpta})
    return rpta.json()
  })
  .then(rptafinal => console.log(rptafinal))
})