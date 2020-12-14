from rest_framework import serializers
from .models import TipoCanchaModel

class TipoCanchaSerializer(serializers.ModelSerializer):
  # canchas = CanchaSerializer(source='canchasTipoCancha',many=True, read_only=True)
  class Meta:
    model = TipoCanchaModel
    # aca hay dos maneras de indicar que campos yo deseo obtener
    #fields y exclude
    #fields me da todo o los campos que yo le indico
    #exclude me da todo, a excepción de los campos que le indico
    #ambos utilizando los nombres de las columnas no de la tabla
    fields = '__all__'
    # exclude = ['createdAd','updatedAt']