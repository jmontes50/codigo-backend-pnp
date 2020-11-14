#1. Se requiere un algoritmo que permita saber el volumen de un recipiente,
#El usuario ingresará Altura, Ancho y Profundidad, calcular el volumen



#2 teniendo la siguiente lista, pedir al usuario que ingrese un nombre y buscar ese nombre
#En la lista, si se encuentra mostrar el nombre y la posición del nombre en esa lista
# nombres = ["Eduardo", "Jorge", "Juan", "Javier", "Carolina", "Angelica", "Juan"]
# nombre_ingresado = input("Ingrese Nombre a Buscar: ")
# posicion = 0
# for nombre in nombres:
#   if(nombre_ingresado == nombre):
#     print(f"Encontrado!! {posicion}")
#   posicion += 1 #posicion = posicion + 1


#3 teniendo la siguiente lista, verificar que números son primos
# numeros = [1, 2, 5, 10, 26, 29, 42, 50]

# for num in numeros:
#   # puedo preguntar si mi numero es mayor que 1
#   if num > 1:
#     #aca ya evaluamos si num es divisible entre cada número posible que va desde el 2 hasta el propio número
#     for i in range(2, num):
#       if(num % i == 0):
#         #Este número no es primo
#         break
#     #el else que esta a la altura del for, aplicará siempre y cuando no haya ocurrido un break dentro de ese for
#     else:    
#       print(num)

#Terminen este ejercicio 2:17
#4 Ingresar el dia de la semana y el dinero que tengamos ese día------
#Si es lunes y tenemos entre 20 y 50 soles podemos ir al cine, si tenemos mas de 50 soles podemos pedir un pollito con papas
#Si es martes y tenemos entre 15 y 30 soles podemos comer una Pizza 2x1, si tenemos entre 31 y 50 soles podemos ir a los juegos mecánicos
#Si es miercoles y tenemos entre 20 y 30 soles podemos comer un Bembos y si tenemos menos de 20 una chanfainita, si tenemos mas de 30 podemos comer una Salchipapa Gigante.

dia = input("Ingrese en que día de la semana esta Ud.")
#Voy a evaluar que es un día que tenga disponible
if(dia != "Lunes" and dia != "Martes" and dia !="Miercoles"):
  print("Ud. esta trabajando")
else:
  monto = int(input("Ingrese su monto: "))
  if(dia == "Lunes"):
    if(monto > 20 and monto <= 50):
      print("Vamos al cine!")
    elif(monto > 50):
      print("Puedes cenar un pollito con papas")
    else:
      print("Pues estamos misios")