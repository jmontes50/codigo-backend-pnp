class Persona:
  #constructor
  def __init__(self,nombre,ocupacion):
    self.nombre = nombre
    self.ocupacion = ocupacion
  
  def saludar(self):
    print(f"Hola, soy {self.nombre}")

objPersona = Persona('Osmar','Desarrollador')

print(objPersona.nombre)

objPersona.saludar()