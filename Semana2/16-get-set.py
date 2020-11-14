#getters y setters

class Persona:
  def __init__(self):
    self.__nombre = ''
    self.__direccion = ''
    self.__telefono = ''

  #setter - set -> Asignar un valor 
  def __setName(self, name):
    self.__nombre = name
  #getter - get -> Obtener un valor
  def __getName(self):
    return self.__nombre
  def __deleteName(self):
    del self.__nombre
  nombre = property(__getName,__setName,__deleteName)

objPersona = Persona()
objPersona.nombre = "Rose"
print(objPersona.nombre)
#Eliminamos nombre
del objPersona.nombre
print(objPersona.nombre)