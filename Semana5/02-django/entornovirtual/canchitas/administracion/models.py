from django.db import models

# Create your models here.
class LocalModel(models.Model):
  #Definir los atributos/campos de nuestra tabla local

  localId = models.AutoField(db_column="local_id",primary_key=True, null=False, unique=True)
  localDir = models.CharField(db_column="local_dir", max_length=50)
  #campos de auditoria
  createAt = models.DateTimeField(db_column="created_at", auto_now_add=True)
  updatedAt = models.DateTimeField(db_column="updated_at", auto_now=True)
  #estado
  estado = models.BooleanField(default=True, null=False)

  class Meta:
    db_table = 't_local'

class TipoCanchaModel(models.Model):
  tipoCanchaId = models.AutoField(db_column='tc_id',primary_key=True, null=False, unique=True)
  tipoCanchaNombre = models.CharField(db_column="tc_nombre", max_length=45)
  tipoCanchaDescripcion = models.CharField(db_column="tc_desc", max_length=120)
  createAt = models.DateTimeField(db_column="created_at", auto_now_add=True)
  updatedAt = models.DateTimeField(db_column="updated_at", auto_now=True)
  #estado
  estado = models.BooleanField(default=True, null=False)

  class Meta:
    db_table = 't_tipocancha'

  
class CanchaModel(models.Model):
  canchaId = models.AutoField(db_column='can_id', primary_key=True, null=False, unique=True)
  canPrecio = models.DecimalField(db_column='can_precio', max_digits=5, decimal_places=2)
  canNombre = models.CharField(db_column='can_nom', max_length=50)
  # .ForeignKey(nombreMopdelo, on_delete, **params)
  tipoCanchaId = models.ForeignKey(TipoCanchaModel, on_delete=models.PROTECT, db_column="tc_id", related_name='canchasTipoCancha')
  localId = models.ForeignKey(LocalModel,on_delete=models.PROTECT, db_column="local_id", related_name='canchasLocal')
  createAt = models.DateTimeField(db_column="created_at", auto_now_add=True)
  updatedAt = models.DateTimeField(db_column="updated_at", auto_now=True)
  #estado
  estado = models.BooleanField(default=True, null=False)
  class Meta:
    db_table = 't_cancha'


