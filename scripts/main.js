alert("Hola we");


var nombre= 'Miguel';
var Altura= 1.90;
const carrera = 'informatica';

//alert(nombre);

//console.log("Saludos de la consola" + "" + nombre);

var conc = nombre + " " + Altura;
document.write(conc);

var Datos = document.getElementById("Datos");
Datos.innerHTML = conc;

if(Altura <= 180)
{
    Datos.innerHTML = "Eres una persona alta";
}

esle
{
    Datos.innerHTML = "Eres una persona bajita";
}

for(var i = 0; i <= 2022; i ++);
{
    console.log("año: " + i);
    Datos.innerHTML = Datos.innerHTML + "<h1>año:" +i+ "</h1>";
}