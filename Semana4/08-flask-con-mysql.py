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

#En caso de tener problemas al ejecutar sentencias desde flask
#ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'root';

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

#TAREA: Crear 1 ruta que permita agregar 1 cliente.
#1. endpoint
#2. recuperar la información del front (petición) JSON
#3. tengo que validad que la información que estoy obteniendo es correcta
#4. armar mi petición con sentencias SQL
#5. dar una respuesta

@app.route('/cliente/agregar', methods=['POST'])
def agregar_cliente():
  info = request.get_json()
  if(info.__contains__('nombre') and info.__contains__('apellido') and info.__contains__('categoria')):
    conexion = mysql.connection.cursor()
    #En caso de que Uds solamente tengan que agregar un dato => conexion.execute('INSERT... VALUES(%s),(valor,))
    conexion.execute('INSERT INTO t_cliente (nom_cli, ape_cli, cat_cli) VALUES (%s, %s, %s)', (info['nombre'],info['apellido'], info['categoria']))
    mysql.connection.commit()
    conexion.close()
    return jsonify({
      'message':'Cliente registrado con exito',
      'content':info
    }), 201
  else:
    return jsonify({
      'message':'Faltan valores, verificar'
    }), 400

@app.route('/cliente/traer/<int:id>', methods=['GET'])
def traercliente(id):
  conexion = mysql.connection.cursor()
  conexion.execute(f"SELECT * FROM t_cliente WHERE id_cli = {id}")
  data = conexion.fetchone()
  # fetchone() => trae la primera coincidencia
  # fetchall() => trae todas las coincidencias
  conexion.close()
  # print(data)
  if data:
    return jsonify({
      'id':data[0],
      'nombre':data[1],
      'apellido':data[2],
      'categoria':data[3]
    }), 200
  return jsonify({
    'message':'No existe el usuario con ese id'
  }), 404

@app.route('/clientesuper/agregar', methods=['POST'])
def agregar_cliente_supermercado():
  #INGRESAR UN CLIENTE CON SUPERMERCADO PERO PRIMERO QUE VALIDE SI EXISTE EL CLIENTE Y SI EXISTE EL SUPERMERCADO, CASO CONTRARIO QUE ME INDIQUE QUE FALTA ALGUNO DE LOS OTROS DOS 
  data = request.get_json()
  if(data.__contains__('id_cliente') and data.__contains__('id_super')):
    conexion = mysql.connection.cursor()
    conexion.execute(f"SELECT * FROM t_cliente WHERE id_cli = {data['id_cliente']}")
    cliente = conexion.fetchone()
    conexion.execute(f"SELECT * from t_supermercados WHERE id_super = {data['id_super']}")
    supermercado = conexion.fetchone()
    conexion.close()

    if supermercado and cliente:
      conexioninsert = mysql.connection.cursor()
      conexioninsert.execute("INSERT INTO t_super_cli (id_cli, id_super) VALUES (%s, %s)", (data['id_cliente'],data['id_super']))
      mysql.connection.commit()
      conexioninsert.close()

      #Ya todo validado y sacramentado madno una respuesta
      return jsonify({
        'message':'El cliente fue vinculado con el supermercado'
      }),201
    else:
      return jsonify({
        'message':'No existe el cliente o el supermercado, revisar por favor'
      }),400
  return jsonify({
    'message':'Faltan datos en el body,revise el json enviado'
  }),400

#RETO: CREEN UNA BD Sencilla, repitan la creación de los endpoint

if __name__ == '__main__':
  app.run(debug=True, port=8000)