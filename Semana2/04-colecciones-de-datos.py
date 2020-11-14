#listas
colores = ["naranja","azul","verde","violeta","rojo"]
# print(colores)
# # pruedo imprimir colores según la posición, dando un inicio y un final
# print(colores[0:2])
# #Puedo "obviar" los indices finales e iniciales para usar elementos del inicio o el final
# print(colores[2:])
# print(colores[:3])

# Todas las formas de IMPRESION de las listas van a aplicar también para str
texto = "Hola muchachos y muchachas"
# print(texto[2:8])

#Método para agregar un nuevo item a mis listas
colores.append("negro")
# print(colores)

# Método para eliminar el elemento indicado
colores.remove("verde")
# print(colores)

#Método para limpiar toda mi lista, eliminar todos mis items
# colores.clear()
# print(colores)

colores.insert(0,"amarillo")
# print(colores)

#TUPLAS
#colección de datos QUE NO SE PUEDE MODIFICAR, es inalterable
tupla_data = (23,48,2021,3.1415,23,"Paloma",True)
#ver longitud de mi tupla
print(len(tupla_data))

#Ver cuantos elementos duplicados tenemos
print(tupla_data.count(23))
print(type(tupla_data.count(23)))

#CONJUNTOS
#coleccion de datos, DESORDENADA, no tenemos indice alguno para acceder a los elementos que tenga dentro
lista_compra = {"Pan","Leche","Huevos","Fruta","Aceite"}

# for vivere in lista_compra:
#   print(vivere)

#DICCIONARIOS 

meses_anio = {
  # clave:valor
  "enero":"verano",
  "febrero":"badabum, amor y amistad",
  "marzo":"clases",
  "abril":"semana santa",
  "mayo":"Día de la madre",
  "junio":"Día del padre"
}

print(meses_anio)
#Para ver el valor de una clave en especifico
print(meses_anio["abril"])
#Quiero ver las llaves que tiene ese diccionario
print(meses_anio.keys())
#Quiero ver los valores del diccionario
print(meses_anio.values())

meses_anio["julio"]="Mes de la Patria"
print(meses_anio)

print(meses_anio.items())
for clave, valor in meses_anio.items():
  print(f"La clave es {clave} y el valor es {valor}")