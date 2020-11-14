#Cree una función para que el usuario ingrese su nombre y edad, con esos datos me indique si tengo que votar obligatoriamente, si tengo mas de 65 que me indique que no tengo obligacion de votar, si es menor de 18, que me diga que no tengo que votar. 

# def puedoVotar(nombre, edad):
#   if(edad >= 65):
#     print(f"{nombre} puedes votar, pero no es obligatorio")
#   elif(edad >= 18 and edad < 65):
#     print(f"{nombre} tienes que votar obligatoriamente")
#   else:
#     print(f"{nombre} No puedes votar")

# nombre = input("Ingresa tu nombre")
# edad = int(input("Ingresa tu edad"))
# puedoVotar(nombre, edad)
# #Cree una funcion que me RETORNE el volumen de un cilindro, formula= altura*pi*r^2

# def hallarVolumenCilindro(altura, radio):
#   return 3.14 * altura * (radio**2)

# miAltura = float(input("Ingrese la altura"))
# miRadio = float(input("Ingrese el radio"))

# volumen = hallarVolumenCilindro(miAltura, miRadio)
# print(volumen)

# Funciones Anónimas

# def sumar(a,b):
#   return a+b

resultado = lambda a, b : a + b
print(resultado(50, 20))