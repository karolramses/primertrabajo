usuario_correcto = "admin"
clave_correcta = "1234"
intentos = 0

while intentos < 3:
    usuario = input("Usuario: ")
    clave = input("Contraseña: ")
    if usuario == usuario_correcto and clave == clave_correcta:
        print("¡Login exitoso!")
        break
    else:
        print("Credenciales incorrectas.")
        intentos += 1

if intentos == 3:
    print("Has superado el número de intentos.")
