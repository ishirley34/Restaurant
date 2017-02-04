CREATE IF NOT EXISTS hotresDB;

USE hotresDB;

CREATE TABLE IF NOT EXISTS reservation
(
`name`VARCHAR(30) NOT NULL
, phone INTEGER(30)
, email VARCHAR(100)
, id VARCHAR(30) NOT NULL,
PRIMARY KEY (id) 

);

CREATE TABLE IF NOT EXISTS waiting
(
`name`VARCHAR(30) NOT NULL
, phone INTEGER(30)
, email VARCHAR(100)
, id VARCHAR(30) NOT NULL,
PRIMARY KEY (id) 
);

INSERT INTO reservation 
(`name`, phone, email, id)
VALUES
('grace', 2222-2222, 'grace@email.me', 'abc' );


