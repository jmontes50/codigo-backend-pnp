def saludar():
  print("Hola, buen día!")

# saludar()

def saludarConNombre(nombre, edad):
  print(f"Hola me llamo {nombre} y tengo {edad} años")

# saludarConNombre("Osmar",30)

def sumar(a, b):
  # return sirve para devolver uno o mas parametros de una función por lo que no bastará con invoicar la función, si no tanmbien asignarla a una variable
  return a + b

# resultado = sumar(30,70)
# print(resultado)

def restar(a,b):
  return a-b
  
# resultado = restar(b=10, a=100) 
# print(resultado)

def funcionIndeterminada(a, b, c, *args):
  print(f"El valor de a es {a}")
  print(f"El valor de b es {b}")
  print(f"El valor de c es {c}")

  print(args)
  for elemento in args:
    print(elemento)

funcionIndeterminada(10,50,60,256,513,4000,"Viernes")

#Kwargs
#es una palabra clave que me permitir recibir muchos parámetros pero utilizando diccionarios

def indeterminada_dicionario(**kwargs):
  print(kwargs)

# diccionario = {
#   "clave":"valor"
# }

# indeterminada_dicionario(nombre="Osmar",numero=2021,lista=[1,2,3,4,5])

def funcion():
  return 100, "Texto", ["Verano","Invierno","Primavera","Otoño"]

miNumero, miTexto, miLista = funcion()

print(miNumero)
print(miTexto)
print(miLista)