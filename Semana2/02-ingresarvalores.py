#prompt
nombre = input("Ingrese su nombre completo: ")
print(nombre)
print("----")
print(type(nombre))

#Cuando capturamos un valor a partir del usuario, este por defecto sera de tipo str (string)
edad = int(input("Ingresa tu edad: "))
edad +=2
print(edad)
print(type(edad))

#Convertir a texto

anio = int(input("Ingresa tu año de nacimiento"))
calcula_edad = 2020 - anio
#para convertir a uns string utilizo la función str(valor_a_convertir)
calcula_edad = str(calcula_edad)
print(type(calcula_edad))