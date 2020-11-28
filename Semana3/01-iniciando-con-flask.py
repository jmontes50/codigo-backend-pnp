from flask import Flask, jsonify, request
#jsonify => sirve para convertir un diccionario en un json para que el frontend pueda entender la API
#request => es para capturar lo que me mande el cliente (frontend) por su cuerpo (body)

app = Flask(__name__)

supermercados = [
  {
    'nombre': 'Super',
    'productos':[
      {
        'nombre': 'Leche',
        'precio': 3.30
      },
      {
        'nombre':'Dog Chow',
        'precio': 7.50
      },
      {
        'nombre': 'Car Wash',
        'precio': 5.00
      },
      {
        'nombre': 'Pollo a la Brasa',
        'precio': 42.00
      }
    ]
  },
  {
    'nombre': ' Metro',
    'productos': [
      {
        'nombre': 'Coca-cola Zero',
        'precio': 2.50
      },
      {
        'nombre': 'Azucar Chucarapi',
        'precio': 4.10
      },
      {
        'nombre': 'Arroz Tacuari',
        'precio': 2.40
      }
    ]
  },
  {
    'nombre': 'Wong',
    'productos': [
      {
        'nombre':'Negrito',
        'precio': 1.20
      },
      {
        'nombre': 'Arroz Costeño',
        'precio': 3.00
      },
      {
        'nombre': 'Inca Cola',
        'precio': 2.50
      }
    ]
  }
]

@app.route('/') #endpoint http://google.com/photos #http://google.com
def inicio():
  return 'La API de supermercados funciona correctamente!!!!' 
  # API - Application Programming Interface

#Hemos definido una una ruta que devuelva todos los supermercados
@app.route('/api/v1/traertodos', methods=['GET'])
def traersupermercados():
  return jsonify({'supermercados': supermercados})

#Definimos una ruta que permita buscar un supermercado
@app.route('/api/v1/supermercadopornombre/<string:nombresuper>',methods=['GET'])
def traersuperpornombre(nombresuper):
  print(nombresuper)

  #Para encontrar el nombre del super dentro de mi lista de supermercados y que me devuelva solo el nombre
  for supermercado in supermercados:
    if supermercado['nombre']==nombresuper:
      return jsonify(supermercado)
    print(supermercado['nombre'])
  
  return 'No existe el supermercado buscado'

@app.route('/api/v1/<string:nombresuper>/productos', methods=['GET'])
def traer_todos_los_productos_por_supermercado(nombresuper):
  for supermercado in supermercados:
    if supermercado['nombre']==nombresuper:
      return jsonify(
        {'Productos':supermercado['productos']}
      )
  
  return jsonify({
    'message':'Supermercado no encontrado'
  }),404

# @app.route('/api/v1/crearsupermercado', methods=['POST'])
# def crear_supermercado():
#   # get_json la data que recibamos (json) lo va a transformar automaticamente en un diccionario para que py lo pueda entender
#   data = request.get_json()
# #  print(data['nombre'])
#   nuevo_supermercado = {
#     'nombre': data['nombre'],
#     'productos':[]
#   }
#   print(nuevo_supermercado)
#   supermercados.append(nuevo_supermercado)

#   return jsonify({"Supermercados":supermercados}),201

# POST va a ser el verbo HTTP que nos va a permitir crear registro
@app.route('/api/v1/supermercados', methods=['GET','POST'])
def manejo_supermercado():
  # print(request.method)
  #.method me indicará que tipo de verbo HTTP Tiene mi Petición
  if request.method == "GET":
    return {
      "ok": True,
      "content":supermercados,
      "message": None
    }, 200
  elif request.method == "POST":
    data = request.get_json()
    nuevo_supermercado = {
      'nombre': data['nombre'],
      'productos':[]
    }
    supermercados.append(nuevo_supermercado)
    print(supermercados)
    return {
      "ok":True,
      "content": None,
      "message": "El supermercado se agrego exitosamente"
    }, 201


app.run(debug=True, port=8000)

