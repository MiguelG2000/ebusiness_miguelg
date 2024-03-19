script sql
#Base de datos lkl skate shop
#viernes 1 de marzo del 2024
#Autor: Miguel Angel Gonzalez Rodriguez 21270168

CREATE SCHEMA IF NOT EXISTS `lklskateshop` DEFAULT CHARACTER SET utf8 ;
USE `lklskateshop` ;
-- -----------------------------------------------------
-- Table `lklskateshop`.`CATEGORIA`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lklskateshop`.`CATEGORIA` (
  `nombre` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(100) NULL,
  PRIMARY KEY (`nombre`))
ENGINE = InnoDB;

insert into categoria (nombre,descripcion) VALUES
('Tablas', 'Tabla de madera profesional para skateboard'),
('Trucks','Ejes profesionales para skateboard'),
('LLantas', 'Ruedas de uretano profesionales'),
('Lijas', 'Lija profesional para skateboard'),
('Calzado', 'Tenis especializados para el deporte');
-- -----------------------------------------------------
-- Table `lklskateshop`.`PRODUCTO`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lklskateshop`.`PRODUCTO` (
  `idPRODUCTO` INT NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `precio` FLOAT NULL,
  `descripcion` VARCHAR(100) NULL,
  `categoria` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idPRODUCTO`),
  INDEX `fk_PRODUCTO_CATEGORIA_idx` (`categoria` ASC) VISIBLE,
  CONSTRAINT `fk_PRODUCTO_CATEGORIA`
    FOREIGN KEY (`categoria`)
    REFERENCES `lklskateshop`.`CATEGORIA` (`nombre`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

insert into producto (idPRODUCTO, nombre, precio, descripcion, categoria) values
(1, 'Tabla virtud 8.5','790','Tabla profesional marca Virtud','Tablas'),
(2, 'Tabla Warco 8.0','590','Tabla profesional marca Virutd','Tablas'),
(3, 'Trucks independent 149','1200','Ejes profesionales marca Independent','Trucks'),
(4, 'Trucks Vulkan 140','900','Ejes profesionales marca Vulkan','Trucks'),
(5, 'Llantas Spitfire 60mm','950','Llantas para skate marca Spitfire de 60 milimetros','Llantas'),
(6, 'Llantas Rata Wheels 58mm','650','Llantas mexicanas para skate de 58 milimetros','Llantas'),
(7, 'Lija Mob','400','Lija de grano grueso marca Mobgrip','Lijas'),
(8, 'Lija Zenit','250','Lija negra marca Zenit','Lijas'),
(9, 'Tenis Gremio medieval','700','Tenis mexicanos marca Gremio para hacer skate','Calzado'),
(10, 'Tenis Vans Lizzie','1800','Tenis Vans modelo pro skate de Lizie Armanto','Calzado');