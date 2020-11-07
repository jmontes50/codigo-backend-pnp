nombres = ["Brayan","Jesus","Lesly","Luis","Felipe","Mily","Paul","Rolando"]

print(nombres[3])
print(nombres[5])

nombre = "Alfredo"
print(nombre in nombres)

#por cada nombrecito en la lista nombres voy a mostrar ese nombrecito
#for referencia_a_cada_item in nombre_lista
for nombrecito in nombres:
  print(nombrecito)
print("Fin del for")

#por el rango
for i in range(0,10):
  print(i)