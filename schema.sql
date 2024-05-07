CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO  notes(title,contents)
VALUES 
('First note','note about something'),
('second note','note about another thing')