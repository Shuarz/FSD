var nombre = "carlos";
var apellido = "perez";
var sueldo = "33000";
var aumento;
var sueldoAumentado;

if(sueldo < 33001)
{
    aumento = "20%"
    sueldoAumentado = sueldo*0.20+sueldo;
}
else
{
    aumento = "15%"
    sueldoAumentado = sueldo*0.15+sueldo;
}


console.log("su nombre y apellido es: " + nombre + " " + apellido);
console.log("su sueldo es: " + sueldo);
console.log("el aumento que recibe es del: " + aumento);
console.log("su nuevo sueldo queda en: " + sueldoAumentado);