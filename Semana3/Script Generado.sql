-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema almacen
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema almacen
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `almacen` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema minimarket
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema minimarket
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `minimarket` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `almacen` ;

-- -----------------------------------------------------
-- Table `almacen`.`t_categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `almacen`.`t_categorias` (
  `cat_id` INT NOT NULL AUTO_INCREMENT,
  `cat_nomb` VARCHAR(25) NULL,
  `cat_desc` VARCHAR(50) NULL,
  PRIMARY KEY (`cat_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `almacen`.`t_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `almacen`.`t_productos` (
  `prod_id` INT NOT NULL AUTO_INCREMENT,
  `prod_nom` VARCHAR(25) NULL,
  `prod_desc` VARCHAR(50) NULL,
  `prod_prec` DECIMAL(5,2) NULL,
  `cat_id` INT NOT NULL,
  PRIMARY KEY (`prod_id`),
  INDEX `fk_t_productos_t_categorias_idx` (`cat_id` ASC) VISIBLE,
  CONSTRAINT `fk_t_productos_t_categorias`
    FOREIGN KEY (`cat_id`)
    REFERENCES `almacen`.`t_categorias` (`cat_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `minimarket` ;

-- -----------------------------------------------------
-- Table `minimarket`.`t_categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `minimarket`.`t_categorias` (
  `cat_id` INT NOT NULL AUTO_INCREMENT,
  `cat_nomb` VARCHAR(25) NULL DEFAULT NULL,
  PRIMARY KEY (`cat_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `minimarket`.`t_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `minimarket`.`t_productos` (
  `prod_id` INT NOT NULL AUTO_INCREMENT,
  `prod_nomb` VARCHAR(25) NULL DEFAULT NULL,
  `prod_desc` VARCHAR(50) NULL DEFAULT NULL,
  `prod_prec` DECIMAL(5,2) NULL DEFAULT NULL,
  `cat_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`prod_id`),
  INDEX `cat_id` (`cat_id` ASC) VISIBLE,
  CONSTRAINT `t_productos_ibfk_1`
    FOREIGN KEY (`cat_id`)
    REFERENCES `minimarket`.`t_categorias` (`cat_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
