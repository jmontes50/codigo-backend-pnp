from base_datos import db

class EstanteModel(db.Model):
  id = db.Column("est_id", db.Integer, primary_key=True)
  capacidad = db.Column("est_cap", db.Integer, nullable=False)
  ubicacion = db.Column("est_ubic", db.String(50))
  descripcion = db.Column("est_desc", db.String(45))

  def __init__(self, capacidad, ubicacion, descripcion):
    self.capacidad = capacidad
    self.ubicacion =  ubicacion
    self.descripcion = descripcion

  