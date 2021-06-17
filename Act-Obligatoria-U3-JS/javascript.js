alert("Punto A")
var mensaje = 'Ingrese Edad: '
var mensaje2 = 'Ingrese Nombre: '
var edad = prompt (mensaje)
console.log(mensaje)
var nombre1 = prompt (mensaje2)
console.log(mensaje2)

function mayorDeEdad(y){
    if(y>=18){
        return true
    }
    
    else{
       return false
        
    }
}


var resultado=mayorDeEdad(edad);

if(resultado==true){
    alert('El usuario ' + nombre1 + ' es mayor de edad')
    console.log('El usuario ' + nombre1 + ' es mayor de edad')
}
else{
alert('El usuario ' + nombre1 + ' es menor de edad')
console.log('El usuario ' + nombre1 + ' es menor de edad')
}

alert("Punto B")
var edad1 = prompt (mensaje)
console.log(mensaje)
var nombre1 = prompt (mensaje2)
console.log(mensaje2)
var edad2 = prompt (mensaje)
console.log(mensaje)
var nombre2 = prompt (mensaje2)
console.log(mensaje2)
var edad3 = prompt (mensaje)
console.log(mensaje)
var nombre3 = prompt (mensaje2)
console.log(mensaje2)

if(edad1>edad2 && edad1>edad3){
    alert('El usuario ' + nombre1 + ' es el mayor con edad de : ' + edad1 + ' años')
console.log('El usuario ' + nombre1 + ' es el mayor con edad de : ' + edad1 + ' años')
}
else{
    if(edad2>edad1 && edad2>edad3){
        alert('El usuario ' + nombre2 + ' es el mayor con edad de : ' + edad2 + ' años')
    console.log('El usuario ' + nombre2 + ' es el mayor con edad de : ' + edad2 + ' años')
    }

    else{
        
            alert('El usuario ' + nombre3 + ' es el mayor con edad de : ' + edad3 + ' años')
        console.log('El usuario ' + nombre3 + ' es el mayor con edad de : ' + edad3 + ' años')
        
    }
}

alert("Punto B, usando for")
let edadMayor=0
let nombreMayor
for(var i=0;i<3;i++) {
    var edad1 = prompt (mensaje)
    console.log(mensaje)
    var nombre1 = prompt (mensaje2)
    console.log(mensaje2)
    if(edad1>edadMayor){
        edadMayor=edad1
        nombreMayor=nombre1
    }
}

alert('El usuario ' + nombreMayor + ' es el mayor con edad de : ' + edadMayor + ' años')
console.log('El usuario ' + nombreMayor + ' es el mayor con edad de : ' + edadMayor + ' años')