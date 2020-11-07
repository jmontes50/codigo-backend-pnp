nombre = "Osmar"
print(nombre)

#Texto con Variables
print("Mi nombre es: ",nombre)

#Segundo Modo
edad = 30
print("1. Mi nombre es: {} y tengo {} años".format(nombre,edad))
#dando el orden de las variables a imprimir por su orden
print("2. Tengo {1} años y me llamo {0}".format(nombre,edad))
#concatenar texto directamente entre texto y variables dentro de las comillas
print(f"Tengo {edad} años y me llamo {nombre}")

pi = 3.14151234562437532892389523798523897
print(f"El número pi tiene un valor de: {pi:1.3f}")