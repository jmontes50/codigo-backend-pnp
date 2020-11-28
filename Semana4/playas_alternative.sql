CREATE SCHEMA IF NOT EXISTS `playas` DEFAULT CHARACTER SET utf8 ;
USE `playas` ;

CREATE TABLE IF NOT EXISTS `playas`.`t_vehiculos` (
  `veh_id` INT NOT NULL AUTO_INCREMENT,
  `veh_placa` VARCHAR(6) NULL,
  `veh_marca` VARCHAR(30) NULL,
  `veh_anio` YEAR NULL,
  `veh_modelo` VARCHAR(45) NULL,
  `veh_color` VARCHAR(20) NULL,
  PRIMARY KEY (`veh_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `playas`.`t_playa` (
  `playa_id` INT NOT NULL AUTO_INCREMENT,
  `playa_dir` VARCHAR(100) NULL,
  `playa_cap` INT NULL,
  PRIMARY KEY (`playa_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `playas`.`t_registro` (
  `reg_id` INT NOT NULL AUTO_INCREMENT,
  `reg_fechin` TIMESTAMP NULL,
  `reg_fechfin` TIMESTAMP NULL,
  `veh_id` INT NOT NULL,
  `playa_id` INT NOT NULL,
  PRIMARY KEY (`reg_id`),
  INDEX `fk_t_registro_t_vehiculos_idx` (`veh_id` ASC) VISIBLE,
  INDEX `fk_t_registro_t_playa1_idx` (`playa_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_registro_t_vehiculos`
    FOREIGN KEY (`veh_id`)
    REFERENCES `playas`.`t_vehiculos` (`veh_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_t_registro_t_playa1`
    FOREIGN KEY (`playa_id`)
    REFERENCES `playas`.`t_playa` (`playa_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


