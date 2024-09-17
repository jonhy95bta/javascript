let usuario = "admin"
let pass = 12345
let login = true
let clave = true
let acces = true
let divisa = ""
let dolarcompra = 1255
let dolarventa = 1275
let eurocompra = 1370
let euroventa = 1400
let conver = true
let total = 0
let valor = 0


while (login) {
    if (prompt("ingrese su usuario") == usuario) {
        login = false
    }
}

while (clave) {

    if (Number(prompt("ingrese su clave")) == pass) {
        clave = false
    }
}

alert("Bienvenido , realice conversiones en USD o Euro ")


while (conver) {

    divisa = prompt("Quiere convertir USD o EURO ?").toLowerCase()

    if (divisa == "usd" || divisa == "euro" || divisa != "") {
        if (divisa == "usd") {
            valor = Number(prompt("ingrese el valor a convertir"))
            total = (valor / dolarventa)
            alert("Usted tiene un total de: " + total + " Dolares");
            conver = confirm("Desea realizar otra operacion ?")
        }
        else if (divisa == "euro") {
            valor = Number(prompt("ingrese el valor a convertir"))
            total = (valor / euroventa)
            alert("Usted tiene un total de: " + total + " Euros");
            conver = confirm("Desea realizar otra operacion ?")
        }

    }
    else alert("Ingrese nuevamente la divisa")
}

console.log("Euro Compra " + eurocompra)
console.log("Euro Venta " + euroventa)
console.log("Dolar Compra " + dolarcompra)
console.log("Dolar Venta " + dolarventa)
