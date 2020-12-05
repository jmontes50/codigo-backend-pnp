from base_datos import db

class AutorModel(db.Model):
  __tablename__="t_autor"
  id = db.Column("autor_id",db.Integer, primary_key =  True)
  nombre = db.Column("autor_nomb", db.String(45), nullable=False)

  def __init__ (self, nombre):
    self.nombre = nombre
  