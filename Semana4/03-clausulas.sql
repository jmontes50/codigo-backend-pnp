#USE se utiliza para indicar en que esquema o db vamos a trabajar

#INSERTANDO VALORES
#Hay dos maneras 
#1. PONER LOS NOMBRES DE LOS CAMPOS SEGUIDO DE LA PALABRA RESERVADA VALUES Y YA LOS VALORES RESPECTIVOS.
#2. DE FRENTE PONER VALUES PERO AHI SI TENEMOS QUE PONER TODOS LOS VALORES, RESPETANDO EL ORDEN EN EL 
#QUE ESTA DEFINIDA MI TABLA

USE playa_aqp;

INSERT INTO T_PLAYA (playa_dir, playa_cap) VALUES ('Av. EEUU 500',30);
INSERT INTO T_PLAYA (playa_id, playa_dir, playa_cap) VALUES (NULL,'Santo Domingo 400',20);
INSERT INTO T_PLAYA VALUES (NULL,'Santa Catalina 300',15);

#SELECT -> Seleccionamos el contenido de la TABLA
#FROM -> a partir de que TABLA
#WHERE -> es un campo opcional que nos sirve para restringir la consulta
#AS -> Sirve para poner una alias a una columna (Ej.: Varias Palabras)

SELECT playa_dir as 'Dirección de la Playa', playa_cap as 'Capacidad' FROM T_PLAYA WHERE playa_cap = 15;
