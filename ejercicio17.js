let intentos = 0;
const usuarioCorrecto = "admin";
const claveCorrecta = "1234";

while (intentos < 3) {
  const usuario = prompt("Usuario:");
  const clave = prompt("Contraseña:");

  if (usuario === usuarioCorrecto && clave === claveCorrecta) {
    console.log("¡Login exitoso!");
    break;
  } else {
    console.log("Credenciales incorrectas.");
    intentos++;
  }
}

if (intentos === 3) {
  console.log("Has superado el número de intentos.");
}
