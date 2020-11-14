class Vehiculo:
  def __init__(self, largo, ancho, color, motor, enMarcha = False):
    self.largo = largo #publica
    self.ancho = ancho
    self.__motor = motor #privada, encapsulado
    self.color = color
    self.enMarcha = enMarcha

  def arrancar(self, arrancar):
    self.enMarcha = arrancar
    if(self.enMarcha):
      chequeo = self.__chequeo_interno()
      if(chequeo):
        return 'El auto esta Ok, y va sin problemas'
      else:
        return 'El auto esta en marcha, pero tiene problemas, Verificar por favor'
    else:
      return 'El auto esta detenido'
    
  #método es privado, lo estamos encapsulando , al estar encapsulado, solamente puede utilizarse
  #dentro de la propia clase
  def __chequeo_interno(self): #privado, encapsulado
    self.gasolina = 30
    self.aceite = "OK"
    self.temperatura = 40
    if(self.gasolina > 20 and self.aceite == "OK" and self.temperatura < 80):
      return True
    else:
      return False
  
objVehiculo = Vehiculo(2.5,1.8,"negro",1800)

print(objVehiculo.arrancar(True))
# print(objVehiculo.__chequeo_interno()) #este método es privado

print(objVehiculo.color)
print(objVehiculo.__motor)