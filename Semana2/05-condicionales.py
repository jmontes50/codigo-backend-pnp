#condicionales if y else - elif

a = 4
b = 4

#If evalua si la condición es verdadera
# if(a > b):
#   print("A es mayor que B")
# elif(a == b): #else if
#   print("A es igual que B")
# else:
#   print("B es mayor que A")

#Pedirle al usuario un numero y preguntar si ese valor es Positivo, Negativo o Cero
# numero = int(input("Ingrese un número: "))

# if(numero > 0):
#   print(f"{numero} es mayor que 0")
# elif(numero==0):
#   print("Es igual a 0")
# else:
#   print(f"{numero} es negativo")

#Pedirle al usuario que ingrese un número y me diga si es impar o es par

# numero2 = int(input("Ingrese un número: "))

# if(numero2 % 2 == 0):
#   print(f"{numero2} es par")
# else:
#   print(f"{numero2} es impar")

#for => es usado para iterar sobre una secuencia de elementos lista, diccionario, conjunto, strings

# texto = "Es fin de semana y el cuerpo lo sabe"

# for letra in texto:
#   print(letra, end=",")

# for i in range(5,10):
#   print(i)

# Deseo saber del numero 15 al 63, cuantos pares hay y cuando impares hay
# cant_pares = 0
# cant_impares = 0
# for i in range(15, 64):
#   if(i % 2 == 0):
#     print(f"{i} es par")
#     cant_pares += 1 #cant_pares = cant_pares + 1
#   else:
#     print(f"{i} es impar")
#     cant_impares += 1

# print(f"Hay {cant_pares} números pares")
# print(f"Hay {cant_impares} números impares")

#break => detiene la ejecución del ciclo que se este ejecutando
# for numero in range(0, 100):
#   if(numero == 50):
#     break
#   print(numero)

#continue
# for numero in range(0,25):
#   if(numero == 12):
#     continue
#   print(numero)

#while

# contador = 1
# fin = 10
# while(contador < fin):
#   print(contador)
#   contador += 1 #contador = contador + 1

# veces_llamo = 0

# while(veces_llamo <= 3):
#   print("Ud. ha intentado llamar")
#   veces_llamo += 1 #veces_llamo = veces_llamo + 1

#pass
# for letra in "Python":
#   if(letra == "h"):
#     pass
#   print("letra actual: " + letra)