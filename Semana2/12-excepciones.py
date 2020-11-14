#excepciones => try ... except ... finally

try:
  numero = int(input("Ingresa un numero"))
  # numero/0
except ValueError:
  print("El valor ingresado tiene que ser un número")
# except ZeroDivisionError:
#   print("No se pudede hacer una división entre 0")
except:
  print("Hubo un error!")
else:
  #Solamente se ejecutará si es que todo va bien
  print("Tudo bem, todo bien")
finally:
  print('Siempre se va a ejecutar')

print("Hola, yo estoy al final del código")