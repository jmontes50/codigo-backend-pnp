USE trabajadores;

#VAMOS A AGREGAR UNA NUEVA COLUMNA A UNA TABLA
ALTER TABLE t_empleado ADD COLUMN fec_nac DATETIME;
#OPCIONALMENTE PODEMOS DAR LA POSICIÓN DE LA COLUMNA CON AFTER <nombre_columna>
ALTER TABLE t_empleado ADD COLUMN dni INT AFTER nombre_empleado;

#PARA ELIMINAR, NO TIENE QUE SER PRIMARY KEY Y TAMPOCO FOREIGN KEY
ALTER TABLE t_empleado DROP COLUMN fec_nac;

#MODIFY
ALTER TABLE t_empleado MODIFY dni VARCHAR(10);