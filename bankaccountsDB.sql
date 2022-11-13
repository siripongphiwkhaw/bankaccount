SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bankaccounts` DEFAULT CHARACTER SET utf8 ;
USE `bankaccounts` ;

-- -----------------------------------------------------
-- Table `bankaccounts`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankaccounts`.`User` (
  `userId` INT AUTO_INCREMENT NOT NULL,
  `email` VARCHAR(100)  UNIQUE NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`userId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankaccounts`.`Account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankaccounts`.`Account` (
  `accountId` INT AUTO_INCREMENT NOT NULL,
  `balance` DOUBLE NOT NULL,
  `userId` INT NOT NULL,
  PRIMARY KEY (`accountId`),
  INDEX `fk_Account_User_idx` (`userId` ASC) VISIBLE,
  CONSTRAINT `fk_Account_User`
    FOREIGN KEY (`userId`)
    REFERENCES `bankaccounts`.`User` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bankaccounts`.`Transaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bankaccounts`.`Transaction` (
  `transactionId` INT  AUTO_INCREMENT NOT NULL,
  `accountId` INT NOT NULL,
  `targetaccountId` INT,
  `amount`  DOUBLE NOT NULL, 
  `Description` VARCHAR(300),
  `Created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`transactionId`),
  INDEX `fk_Transaction_Account1_idx` (`accountId` ASC) VISIBLE,
  CONSTRAINT `fk_Transaction_Account1`
    FOREIGN KEY (`accountId`)
    REFERENCES `bankaccounts`.`Account` (`accountId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;