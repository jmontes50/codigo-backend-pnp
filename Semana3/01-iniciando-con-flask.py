from flask import Flask, jsonify
#jsonify => sirve para convertir un diccionario en un json para que el frontend pueda entender la API

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

app.run(debug=True, port=8000)

