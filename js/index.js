//Carrito de cmmpras de un desayuno
function ingresar() {
    let user
    let password
    let registrado = false

    while (registrado===false){
        alert ("Debe crear un usuario para ingresar") 
        user = prompt("Elija un nombre usuario:")
        password = prompt ("Elija su palabra de contraseña:")
        let validacionUsuario = (user !== '' && user !==null) 
        let validacionpassword = (password!=='' && password!==null)
        
        if(validacionUsuario && validacionpassword){
            alert (`Bienvenido ${user}. Ya estas registrado. Tenes disponible el cupon "PRIMERACOMPRA" del 20% de descuento`)
            registrado = true
        }
        if(!validacionUsuario){
            alert("Usuario ingreado no valido")
            registrado=false
        }
        if(!validacionpassword){
            alert("Contraseña ingresada no valida")
            registrado=false
        }
        }
        let login =false
        while(login ===false) {
            let userIngresado = prompt ("Ingrese su usuario para ingresar:")
            let passIngresado = prompt ("Ingrese su contraseña:")
            let validacion = ((user === userIngresado) && (password === passIngresado)) 
            if(validacion) {
                alert(`${user}, has podido ingresar`)
                login =true
            }else{
                alert("Usuario y/o contraseña incorrectos")
            }
        }
    }   

function elegir (){
let precioTostadas = 1000
let desayunoTostadas = "Tostadas con cafe"
let precioYogurt = 1200
let desayunoYogurt = "Desayuno Yogurt"
let precioHuevos =1500
let desayunoHuevos = "Desayuno de Huevos revueltos"
let precioHotcakes = 800
let desayunoHotcakes = "Desayuno de Hotcakes"
let precioCroissant = 950
let desayunoCroissant = "Desayuno de croissant"
let precioTotal = 0

let contador = 0
let quieroOtro =true
while ( quieroOtro == true ) {
    alert("Elija su desayuno a continuacion")
    let opciones = parseFloat(prompt(` 
    1-Tostadas con cafe
    2-Yogurt con jugo de naranja
    3-Hotcakes con dulce de leche
    4-Tostado de jamon y queso
    5-Croissant de Palta
                            
    Seleccione el numero correspondiente`))
    if (opciones == 1) {
        alert(`Elegiste ${desayunoTostadas}`)
        precioTotal = precioTotal + precioTostadas
        contador = contador +1
        if(confirm("Quieres otro desayuno?")){
            quieroOtro = true
        }else{
            quieroOtro = false
        }
        
    }
    if (opciones == 2) {
        alert(`Elegiste ${desayunoYogurt}`)
        precioTotal = precioTotal + precioYogurt
        contador = contador +1
        if(confirm("Quieres otro desayuno?")){
            quieroOtro = true
        }else{
            quieroOtro = false
        }
    }
    if (opciones == 3) {
        alert(`Elegiste ${desayunoHotcakes}`)
        precioTotal = precioTotal +  precioHotcakes
        contador = contador +1
        if(confirm("Quieres otro desayuno?")){
            quieroOtro = true
        }else{
            quieroOtro = false
        }
    }
    if (opciones == 4) {
        alert(`Elegiste ${desayunoHuevos}`)
        precioTotal = precioTotal +  precioHuevos
        contador = contador +1
        if(confirm("Quieres otro desayuno?")){
            quieroOtro = true
        }else{
            quieroOtro = false
        }
    }
    if (opciones == 5) {
        alert(`Elegiste ${desayunoCroissant}`)
        precioTotal = precioTotal +  precioCroissant
        contador = contador +1
        if(confirm("Quieres otro desayuno?")){
            quieroOtro = true
        }else{
            quieroOtro = false
        }
    
    if ((opciones>= 5 || opciones < 0 || opciones == null)){
        alert("Debes elegir un desayuno")
    }  
    }if (opciones == 0) {
        alert ("Gracias por contribuir a nuestra quiebra")
            quieroOtro=false
        
    }

}
if(confirm("Quiere ingresar un cupon de descuento?")){
    let cupon = prompt("Ingrese cupon:")
    if (cupon== "PRIMERACOMPRA"){
        precioTotal = precioTotal * 0.8
        alert("cupon valido")
    }else{
        alert("Cupon no valido")
    }
}
alert (`Has comprado ${contador} desayunos, el total a pagar es: ${precioTotal}`)
}

ingresar ()
elegir ()

