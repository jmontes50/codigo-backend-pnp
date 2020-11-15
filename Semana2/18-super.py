class Persona:
  def __init__(self, nombre, fecha_nacimiento, nacionalidad, dni):
    self.nombre = nombre
    self.fec_nacimiento = fecha_nacimiento
    self.nacionalidad = nacionalidad
    self.dni = dni
  def descripcion(self):
    return 'Nombre: {}, Fecha de Nacimiento: {}, Nacionalidad: {}, DNI: {}'.format(self.nombre, self.fec_nacimiento, self.nacionalidad, self.dni)
  
  def metodoDelPadre(self, atributo=None):
    print('Soy el metodo del padre', atributo)

class Empleado(Persona):
  def __init__ (self, nombre, fec_nacimiento, nacionalidad, dni, salario, cargo, fecha_inicio, profesion, seguro):
    super().__init__(nombre, fec_nacimiento, nacionalidad, dni)
    self.salario = salario
    self.cargo = cargo
    self.fecha_inicio = fecha_inicio
    self.profesion = profesion
    self.seguro = seguro
  
  def descripcion(self):
    resultado = super().descripcion()
    print(resultado, "Salario: {}, Cargo: {}, Fecha de Contrato: {}, Profesión: {}, Seguro:{}".format(self.salario,self.cargo,self.fecha_inicio,self.profesion,self.seguro))
    super().metodoDelPadre('argumento metodo padre')

objPersona = Persona('Christian','1994/08/10','Peruano','587578896')
print(objPersona.descripcion())

objEmpleado = Empleado('Diana',"1992/10/19","Peruana","46745564",1600.00,"Supervisora de TI","2019/05/03","Administradora","4325343")

objEmpleado.descripcion()