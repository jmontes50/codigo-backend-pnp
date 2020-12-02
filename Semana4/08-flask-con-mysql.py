from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

#Tenemos que tener instalado flask-mysqldb -> pip install flask-mysqldb
#Si hay problemas instalar el wheel -> https://www.lfd.uci.edu/~gohlke/pythonlibs/#mysqlclient
#y de ahi volver a probar con pip install flask-mysqldb

app = Flask(__name__)
print(__name__)
# print(app.config)

#CONFIGURACIÓN PARA LA CONEXIÓN DE LA BD
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='root'
app.config['MYSQL_DB']='supermercados'

#CREE UN VINCULO CON MI BD
mysql = MySQL(app)

@app.route('/')
def test():
  return 'Funciona!!!!!!!'

#TRAER TODOS LOS SUPERMERCADOS
@app.route('/supermercados/traer')
def traer_supermercados():
  #ABRIR UNA CONEXIÓN CON NUESTRA BASE DE DATOS
  conexion = mysql.connection.cursor()
  #HACER LA CONSULTA QUE QUEREMOS EN NUESTRA BASE DE DATOS
  #EXECUTE va a tener la sentencia SQL a ejecutar
  conexion.execute('SELECT * FROM t_supermercados')
  #VAMOS A CAPTURAR LA DATA O INFORMACION QUE NOS LLEGA DE NUESTRA QUERY
  #fetchall() -> Que nos devuelve todo
  #fetchone() -> Nos va a devolver la primera coincidencia
  informacion = conexion.fetchall()
  #Cerramos la conexion y libero el tunnel, es recomendable cerrar la conexión

  print(informacion) #CONVERTIR ESTA INFO A UN JSON Bonito para una respuesta.

  diccionario = []
  for supermercado in informacion:
    supermercadodic = {
      'id':supermercado[0],
      'nombre':supermercado[1],
      'direccion':supermercado[2]
    }
    diccionario.append(supermercadodic)
  conexion.close()
  return jsonify(diccionario)

@app.route('/supermercados/agregar',methods=['POST'])
def agregar_super():
  info = request.get_json()
  # print(info)
  if(info['nombre'] and info['direccion']):
    conexion = mysql.connection.cursor()
    conexion.execute('INSERT INTO t_supermercados (nom_super, dir_super) VALUES (%s, %s)',(info['nombre'],info['direccion']))
    #tenemos que esperar y asegurarnos que el ingreso de datos sea correcto
    mysql.connection.commit()
    conexion.close()
    return jsonify({
      'message':'Supermercado agregado con exito',
      'content':info
    }), 201

  else: #esto en caso las cosas salgan mal
    return jsonify(
      {
        'message':'Faltan Datos!'
      }
    ), 400

  return 'ok'

if __name__ == '__main__':
  app.run(debug=True, port=8000)