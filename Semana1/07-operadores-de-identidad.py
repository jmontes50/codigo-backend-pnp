#Operadores de Identidad
#is = es
#is not = no es
#sirve para ver si estan apuntando a la misma dirección de memoria

frutas = ["manzanas","fresas"]

frutas3 = frutas

print(frutas3 is frutas)
print(frutas3 is not frutas)