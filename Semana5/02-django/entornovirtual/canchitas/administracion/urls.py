from django.urls import path
from .views import TipoCanchasView,TipoCanchaView

# esto se tiene que llamar si o si urlpatterns
urlpatterns = [
  # path(ruta_a_acceder,nombreVista.as_view())
  path('tipoCanchas',TipoCanchasView.as_view(), name="TipoCanchas"),
  path('tipoCancha/<int:tipoCanchaId>', TipoCanchaView.as_view()),
]