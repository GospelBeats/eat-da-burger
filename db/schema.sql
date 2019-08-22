
-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
     -- Create the burgers_db database --
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create a burgers table with the required fields --
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  	PRIMARY KEY(id)
);