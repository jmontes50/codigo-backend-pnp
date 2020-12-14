from .models import TipoCanchaModel
from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .serializers import TipoCanchaSerializer
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

class TipoCanchasView(ListCreateAPIView):
  queryset = TipoCanchaModel.objects.all() #SELECT * FROM t_tipocancha
  serializer_class = TipoCanchaSerializer
  def get(self, request):
    print(self.get_queryset())
    # return 'Ok'
    respuesta = self.get_serializer(self.get_queryset())
    return Response('Ok',status=status.HTTP_200_OK)