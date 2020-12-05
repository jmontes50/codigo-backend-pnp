from flask import Flask
#pip install flask-restful
from flask_restful import Api
#pip install flask-sqlalchemy
from base_datos import db
from models.estante import EstanteModel
from models.autor import AutorModel
from models.libro import LibroModel
from models.autorlibro import AutorLibroModel

from controllers.estante import EstantesController

app = Flask(__name__)
# dialect+driver://username:password@host:port/database
#MySQL, Oracle, SQLite, PostgreSQL
app.config['SQLALCHEMY_DATABASE_URI']='mysql://root:root@localhost/libreria'
api = Api(app=app)

# script que se encargue de conectar a la bd, antes de hacer nada, va a conectarse a la db
@app.before_first_request
def iniciador():
  # Aqui ya se conectar a la db
  db.init_app(app)
  #Elimina los modelos y los vuelve a crear
  # db.drop_all(app=app)
  # Creame los modelos que tengas
  db.create_all(app=app)


@app.route('/')
def inicio():
  return "El servidor funciona, correctamente"

api.add_resource(EstantesController, '/estante')


if __name__ == '__main__':
  app.run(debug=True)