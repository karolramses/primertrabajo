suma = 0
for i in range(1, 51):
    if i % 2 != 0:
        suma += i
    while suma > 500:
        print("La suma ha superado 500. Deteniendo...")
        break
print("Suma total de impares entre 1 y 50:", suma)
