from django.db import models

# Create your models here.
class LocalModel(models.Model):
  #Definir los atributos/campos de nuestra tabla local

  localId = models.AutoField(db_column="local_id",primary_key=True, null=False, unique=True)
  localDir = models.CharField(db_column, max_length=50)
  #campos de auditoria
  createAt = models.DateTimeField(db_column="created_at", auto_now_add=True)
  updatedAt = models.DateTimeField(db_column="updated_at", auto_now=True)
  #estado
  estado = models.BooleanField(default=True, null=False)