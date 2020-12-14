from django.urls import path
from .views import TipoCanchasView

# esto se tiene que llamar si o si urlpatterns
urlpatterns = [
  # path(ruta_a_acceder,nombreVista.as_view())
  path('tipoCancha',TipoCanchasView.as_view(), name="TipoCanchas"),
]