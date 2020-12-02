#WHERE, es una palabra reservada al momento de hacer consultas, un adicional.
#Y me va a servir para ser mas especifico al momento de hacer mis consultas

SELECT * FROM t_empleado;
SELECT * FROM t_empleado WHERE id_empleado = "1";

#UPDATE
#Va a actualizar un registro, indicando de forma especifica donde y que campo vamos a modificar
#UPDATE nombre_Tabla SET campo_a_modificar1 = "nuevo valor", campo_a_modificar2 = "otro nuevo valor" WHERE condicional = "valor condicional";

UPDATE t_empleado SET nombre_empleado = "YESENIA PEREZ", dni = "567877897" WHERE id_empleado = "2";

#DELETE
#Elimina un registro, indicando alguna condicional, usualmente el ID
#DELETE FROM nombre_tabla WHERE condicion;

DELETE FROM t_empleado WHERE id_empleado = 4;