CREATE SCHEMA trabajadores DEFAULT CHARACTER SET utf8 ;
USE trabajadores;

CREATE TABLE t_departamento(
  id_departamento INT AUTO_INCREMENT NOT NULL,
  nombre_departamento varchar(100),
  PRIMARY KEY(id_departamento)
);

CREATE TABLE t_empleado(
  id_empleado INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  nombre_empleado VARCHAR(50),
  departamento_id int,
  constraint fk_departamento_id
  foreign key (departamento_id) references t_departamento(id_departamento)
);

INSERT INTO t_departamento (nombre_departamento) VALUES ('VENTAS'),
                                                        ('ADMINISTRACIÓN'),
                                                        ('MARKETING'),
                                                        ('FINANZAS');

INSERT INTO t_empleado (nombre_empleado,departamento_id) VALUES ('JUAN PEREZ',1),
                                                                ('SONIA PEREZ',3),
                                                                ('SOFIA LLAYQUI',4),
                                                                ('JORGE GARNICA', NULL)

#INNER JOIN 
#NOS TRAERÁ LA INTERSECCION DE DOS O MAS TABLAS

SELECT * FROM t_departamento INNER JOIN t_empleado ON t_departamento.id_departamento = t_empleado.departamento_id;

#en caso no quiera informacion redundante ESPECIFICAR QUE NECESITO y también es recomendable utilizar alias, va a evitar errores al momento de hacer la consulta y darnos cuenta que tabla estamos seleccionando
SELECT id_departamento, nombre_departamento, id_empleado FROM t_departamento INNER JOIN t_empleado 
ON t_departamento.id_departamento = t_empleado.departamento_id;

#LEFT JOIN
SELECT * FROM t_departamento AS dep LEFT JOIN t_empleado as emp ON dep.id_departamento = emp.departamento_id;

#RIGHT JOIN
SELECT * FROM t_departamento AS dep RIGHT JOIN t_empleado as emp ON dep.id_departamento = emp.departamento_id;

#FULL OUTER JOIN
SELECT * FROM t_departamento AS dep LEFT JOIN t_empleado as emp ON dep.id_departamento = emp.departamento_id UNION
SELECT * FROM t_departamento AS dep RIGHT JOIN t_empleado as emp ON dep.id_departamento = emp.departamento_id;

