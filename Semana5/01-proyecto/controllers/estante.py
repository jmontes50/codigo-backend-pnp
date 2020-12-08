from flask_restful import Resource, reqparse
from models.estante import EstanteModel

class EstantesController(Resource):
  parser = reqparse.RequestParser()
  parser.add_argument(
    "capacidad",
    type=int,
    required=True,
    help="Falta la capacidad del estante"
  )
  parser.add_argument(
    "ubicacion",
    type=str,
    required=True,
    help="Falta la ubicación del estante"
  )
  parser.add_argument(
    "descripcion",
    type=str,
    required=True,
    help="Falta una descripción"
  )
  
  def get(self):
    # En vez hacer peticiones vamos a utilizar funciones que nos devuelvan la información de la BD pero en forma de objetos
    # SELECT
    estantes = EstanteModel.query.all()
    # print(estantes)
    # return 'Ok'
    resultado = []
    for estante in estantes:
      temporal = estante.mostrar_json()
      resultado.append(temporal)
    return {
      'ok':True,
      'content':resultado,
      'message':None
    }
  
  def post(self):
    data = self.parser.parse_args()
    estante = EstanteModel(data['capacidad'], data['ubicacion'], data['descripcion'])
    try:
      estante.guardar_bd()
      print(estante)
      return{
        'ok':True,
        'message':'Se guardo exitosamente el estante',
        'content':estante.mostrar_json()
      }
    except:
      return {
        'ok':False,
        'message':"No se pudo guardar"
      }