const nombre = document.getElementById("nombre")
const password = document.getElementById("contraseña")
const boton = document.getElementById("boton")
const form = document.getElementById("formulario")
const formm = document.getElementById("formu")



form.addEventListener("keydown", function(event) {
    
    if(event.keyCode == 13){
    event.preventDefault()
    const data ={
        username:nombre.value,
        contraseña:password.value
    }
    console.log(event)
    console.log(data)
      }
    }
)
formm.addEventListener("keydown", function(event) {
  
  if(event.keyCode == 13){
  event.preventDefault()
  const data ={
      username:nombre.value,
      contraseña:password.value
  }
  console.log(event)
  console.log(data)
    }
  }
)

boton.addEventListener("click", function(event) {
  
 
  event.preventDefault()
  const data ={
      username:nombre.value,
      contraseña:password.value
  }
  console.log(event)
  console.log(data)
    
  }
)
