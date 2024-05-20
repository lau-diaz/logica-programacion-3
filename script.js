
function factorial() {
    let num = parseInt(prompt("Por favor ingrese un número que desee calcular su factorial:"));
    let tipo = typeof num
    let result = num
    if (tipo != "number") {
        console.log("El valor ingresado no es válido, por favor ingrese un número")
    } else if (num == 0 || num == 1) {
        console.log(`El resultado es: 1`)
    } else if (tipo == "number") {
        while (num > 1) {
            num--;
            result *= num;
        }
        console.log(`El resultado es: ${result}`)
    }
}

factorial()
//En el fondo sigo teniendo algunas dudas sobre este ejercicio//