let resultado = 0;
let intento = 0;
while (intento <= 2) {
    let valor = prompt ("Elegí: piedra, papel o tijera. Tenes tres intentos");
    if ((valor == "piedra") || (valor == "papel") || (valor == "tijera")) {
        let valorArray = ["piedra", "papel", "tijera"];
        let valorPrograma;
        alert (valorPrograma = valorArray [(Math.round(Math.random() * 2))]);
        if ((valor == "piedra" && valorPrograma == "piedra") || (valor == "papel" && valorPrograma == "papel") || (valor == "tijera" && valorPrograma == "tijera")) {
            alert ("Empate");
            continue;
        } else if ((valor == "piedra" && valorPrograma == "papel") || (valor == "papel" && valorPrograma == "tijera") || (valor == "tijera" && valorPrograma == "piedra")) {
            alert ("Perdiste");
            resultado--;
        } else if ((valor == "piedra" && valorPrograma == "tijera") || (valor == "papel" && valorPrograma == "piedra") || (valor == "tijera" && valorPrograma == "papel")) {
            alert ("Ganaste");
            resultado++;
        }
    } else {
        alert ("Incorrecto. Ingresa piedra, papel o tijera");
        continue;
    }
    intento++;
}
if (resultado > 0) {
    alert ("GANASTE LA PARTIDA");
} else {
    alert ("PERDISTE LA PARTIDA");
}