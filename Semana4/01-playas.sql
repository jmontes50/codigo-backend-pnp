# Crear una Base de datos de una playa de estacionamiento, en el cual
# se van a guardar los vehiculos que ingresaron y tener su registro,
# la tabla de vehiculos debe tener un id, placa, marca, año, modelo,color
# La playa de estacionamiento va a tener 3 lugares (sedes), Una En la calle San Francisco 204
# otro en la Av. EEUU 505 y otro en la Av. Ejercito 400 Por lo que se debe tener 
# Una tabla de playas, esta tabla debe guardar id, direccion, capacidad.
# La Base de Datos se debe llamar PLAYA_AQP

CREATE DATABASE IF NOT EXISTS PLAYA_AQP;
USE PLAYA_AQP;

CREATE TABLE t_vehiculo(
  veh_id int not null primary key auto_increment,
  veh_placa varchar(7),
  veh_marca varchar(30),
  veh_anio year,
  veh_modelo varchar(40),
  veh_color varchar(20)
);

CREATE TABLE t_playa(
  playa_id int not null primary key auto_increment,
  playa_dir varchar(120),
  playa_cap int unsigned
);

CREATE TABLE t_registro(
  reg_id int not null primary key auto_increment,
  reg_fechain timestamp,
  reg_fechafin timestamp,
  reg_propietario varchar(40),
  playa_id int,
  veh_id int,
  foreign key (playa_id) references t_playa(playa_id),
  foreign key (veh_id) references t_vehiculo(veh_id)
);