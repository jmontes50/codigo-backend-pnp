class Vehiculo:
  def __init__(self,marca,modelo):
    self.marca = marca
    self.modelo = modelo

  def estado(self):
    return "Marca:",self.marca,"\nModelo:",self.modelo
  
class Moto(Vehiculo):
  hacer_pirueta = ""
  def __init__(self, marca, modelo, piruetas):
    self.hacer_pirueta = piruetas
    super().__init__(marca, modelo)

class Avion(Vehiculo):
  def __init__(self,marca,modelo,pasajeros):
    self.pasajeros = pasajeros
    super().__init__(marca,modelo)

  def pasajerosListos(self):
    return "El avión esta listo con ", self.pasajeros, " pasajeros"


objMoto = Moto('Yamaha','X10','Caballito')
print(objMoto.marca)

objAvion = Avion("Boeing","747","100")
print(objAvion.estado())
print(objAvion.pasajerosListos())