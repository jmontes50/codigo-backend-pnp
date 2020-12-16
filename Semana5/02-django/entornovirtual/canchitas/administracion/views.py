from .models import TipoCanchaModel
from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView
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
    respuesta = self.get_serializer(self.get_queryset(), many=True)
    print(respuesta.data)
    # return Response('Ok',status=status.HTTP_200_OK)
    return Response({
      'ok':True,
      'content':respuesta.data,
      'message':None
    })

  def post(self, request):
    #print(request.data)
    respuesta = self.get_serializer(data=request.data)
    print(respuesta.is_valid(raise_exception=True))
    if respuesta.is_valid(raise_exception=False):
      # con el save lo guardamos en la base de datos
      respuesta.save()
      return Response({
        'ok':True,
        'content':respuesta.data,
        'message':None
      }, status=status.HTTP_201_CREATED)
    
    else:
      return Response({
        'ok':False,
        'content':None,
        'message':'Hubo un error al crear el Tipo Cancha'
      }, status=status.HTTP_400_BAD_REQUEST)

class TipoCanchaView(RetrieveUpdateDestroyAPIView):
  serializer_class = TipoCanchaSerializer
  queryset = TipoCanchaModel.objects.all()
  def get(self, request, tipoCanchaId):
    # Ek filter no retorna error, pero si una lista vacia
    # print(self.get_queryset().filter(tipoCanchaId=tipoCanchaId))
     # El .get() devuelve todas las coincidencias de un modelo, eso permite que yo pueda indicar el parametro a utilizar
    # print(self.get_queryset().get(tipoCanchaId=tipoCanchaId))
    respuesta = self.get_serializer(self.get_queryset().get(tipoCanchaId=tipoCanchaId))
    return Response ({
      'Ok':True,
      'content':respuesta.data,
      'message':None
    })

  def put(self, request, tipoCanchaId):
    respuesta = self.get_serializer(self.get_queryset().get(tipoCanchaId=tipoCanchaId), data=request.data)
    if respuesta.is_valid():
      resultado = respuesta.update()
      return Response({
        'ok':True,
        'content':self.serializer_class(resultado).data,
        'message':None
      })
    else:
      return Response({
        'ok':False,
        'content':None,
        'message':'Hubo un error al actualizar'
      }, status=status.HTTP_400_BAD_REQUEST)
  
  def delete(self, request, tipoCanchaId):
    respuesta = self.get_serializer(self.get_queryset().get(tipoCanchaId=tipoCanchaId))
    resultado = respuesta.delete()
    return Response({
      'ok':True,
      'content':self.get_serializer(resultado).data,
      'message': 'Se inhabilito con exito el tipo de Cancha'
    }, status=status.HTTP_200_OK)
