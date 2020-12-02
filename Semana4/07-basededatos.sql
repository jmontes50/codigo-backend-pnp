create schema if not exists supermercados;
use supermercados;

create table if not exists t_supermercados(
  id_super int primary key not null auto_increment,
  nom_super varchar(50),
  dir_super varchar(50)
);

create table if not exists t_cliente(
  id_cli int primary key not null auto_increment,
  nom_cli varchar(50),
  ape_cli varchar(50),
  cat_cli varchar(50)
);

create table if not exists t_super_cli(
  id_super_cli int primary key not null auto_increment,
  id_cli int,
  id_super int,
  foreign key (id_cli) references t_cliente(id_cli),
  foreign key (id_super) references t_supermercados(id_super)
);

#AGREGANDO DATOS

INSERT INTO t_supermercados (nom_super, dir_super) VALUES 
                            ('Tottus','Porongoche S/N'),
                            ('Metro','Via de la Salud S/N'),
                            ('El Super','Calle Pierola S/N');