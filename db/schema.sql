DROP DATABASE IF EXISTS fifa_db;
CREATE DATABASE fifa_db;
USE  fifa_db;

CREATE TABLE players (
    id INT (6) NOT NULL AUTO_INCREMENT,
    player_name VARCHAR (24) NOT NULL,
    pick BOOL DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO players (player_name, pick) VALUES ("Lionel Messi",true);
INSERT INTO players (player_name, pick) VALUES ("Cristiano Ronaldo",false);
INSERT INTO players (player_name, pick) VALUES ("Mohamed Salah",false);
INSERT INTO players (player_name, pick) VALUES ("Luka Modrić",false);
INSERT INTO players (player_name, pick) VALUES ("Neymar",false);
