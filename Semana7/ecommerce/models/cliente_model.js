const Sequelize = require("sequelize");
const crypto = require("crypto");

const cliente_model = (conexion) => {
  let cliente = conexion.define(
    "clientes",
    {
      cliId: {
        field: "cli_id",
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      cliNombre: {
        type: Sequelize.STRING(60),
        field: "cli_nombres",
      },
      cliApellidos: {
        type: Sequelize.STRING(100),
        field: "cli_apellidos",
      },
      cliDocumento: {
        type: Sequelize.STRING(12),
        field: "cli_documento",
        unique:true
      },
      cliEmail: {
        field: "cli_email",
        type: Sequelize.STRING(50),
        unique: true,
      },
      cliHash: {
        field: "cli_hash",
        type: Sequelize.TEXT,
      },
      cliSalt: {
        field: "cli_salt",
        type: Sequelize.TEXT,
      },
    },
    {
      tableName: "t_clientes",
      timestamps: true,
    }
  );
  // AGREGAR PROTOTYPES
  //Cuando utilizamos prototypes, no podemos asignar funciones flecha como valor, tenemos que agregarle directamente funciones clásicas hechas con function()
  cliente.prototype.setSaltAndHash = function (password) {
    //https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_randombytes_size_callback
    //A partir del modulo crypto y su método randomBytes vamos a generar una cadena de bytes con una longitud de 16, terminado eso lo convertimos a un String con formato Hexadecimal
    this.cliSalt = crypto.randomBytes(16).toString("hex");

    //Con ayuda del Salt ya generado previamente, vamos a combinarlo con la contraseña mediante una cierta cantidad de iteraciones y al final le decimos que longitud de bytes queremos que tenga, en este caso 64 y luego el algoritmo de encriptacion en este caso SHA512 y lo convertimos a Hexadecimal
    //https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html#crypto_crypto_pbkdf2sync_password_salt_iterations_keylen_digest
    this.cliHash = crypto.pbkdf2Sync(password,this.cliSalt, 1000, 64, 'sha512').toString('hex');
  };

  return cliente;
};

module.exports = cliente_model;
