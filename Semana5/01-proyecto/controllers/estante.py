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
  parser.add_argument(
    "estado",
    type=bool,
    required=False,
    help="Falta el estado"
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
      #if estante.estado = False 
      resultado.append(temporal)
    return {
      'ok':True,
      'content':resultado,
      'message':None
    }
  
  def post(self):
    data = self.parser.parse_args()
    estante = EstanteModel(data['capacidad'], data['ubicacion'], data['descripcion'], data['estado'])
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

class EstanteController(Resource):
  #un endpoint que me permita obtener un recurso(estante) por su id
  def get(self, est_id):
    estante = EstanteModel.query.filter_by(id=est_id).first()
    # print(estante)
    if estante:
      return {
        'ok':True,
        'content':estante.mostrar_json(),
        'message':None
      }
    else:
      return {
        'ok':False,
        'content':None,
        'message': 'No existe ningun recurso con ese id: '+str(est_id)
      }, 404

  def put(self, est_id):
    estante = EstanteModel.query.filter_by(id=est_id).first()
    if estante:
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
      # recien hacemos la operación para guardar datos
      data = parser.parse_args()
      print(data)
      #Con el JSON obtenido del Front y verificado cambiamos las propiedades de estante
      estante.capacidad = data['capacidad']
      estante.ubicacion = data['ubicacion']
      estante.descripcion = data['descripcion']
      #Y guardamos
      estante.guardar_bd()

      return{
        'ok':True,
        'content':estante.mostrar_json(),
        'message':None
      }
    
    else:
      return{
        'ok':False,
        'content':None,
        'message': 'No existe ningun recurso solicitado con el id: '+str(est_id)
      }

  def delete(self, est_id):
    estante = EstanteModel.query.filter_by(id=est_id).first()
    if estante:
      if estante.estado == True:
        estante.estado = False
        estante.guardar_bd()
        return {
          'ok':True,
          'content':None,
          'message': 'Se inhabilito correctamente el registro con id: '+str(est_id)
        }
      else:
        return {
          'ok':False,
          'content':None,
          'message':'El estante ya se encuentra deshabilitado'
        }, 400
    else:
      return{
        'ok':False,
        'content':None,
        'message':'No existe el estante'
      }, 400