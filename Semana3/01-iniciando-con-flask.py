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

@app.route('/api/v1/traertodos', methods=['GET'])
def traersupermercados():
  return jsonify({'supermercados': supermercados})


app.run(debug=True, port=8000)

