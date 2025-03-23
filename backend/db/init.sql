CREATE DATABASE Armstrong;
use Armstrong;

CREATE TABLE Abonnement (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prix DECIMAL(10,2) NOT NULL,
    description TEXT
);

CREATE TABLE Adherent (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telephone VARCHAR(20),
    date_naissance DATE,
    id_abonnement INT,
    FOREIGN KEY (id_abonnement) REFERENCES Abonnement(id) ON DELETE SET NULL
);

CREATE TABLE Adresse (
    id SERIAL PRIMARY KEY,
    code_postal VARCHAR(10) NOT NULL,
    ville VARCHAR(100) NOT NULL,
    rue VARCHAR(255) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    id_adherent INT UNIQUE, 
    FOREIGN KEY (id_adherent) REFERENCES Adherent(id) ON DELETE CASCADE
);

CREATE TABLE Club (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE Coach (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telephone VARCHAR(20),
    specialite TEXT
);

CREATE TABLE CoursCollectif (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    id_club INT,
    id_coach INT NOT NULL,
    FOREIGN KEY (id_club) REFERENCES Club(id) ON DELETE CASCADE,
    FOREIGN KEY (id_coach) REFERENCES Coach(id) ON DELETE CASCADE
);

CREATE TABLE Reservation (
    id SERIAL PRIMARY KEY,
    id_adherent INT NOT NULL,
    id_cours_collectif INT NOT NULL,
    date_reservation TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (id_adherent) REFERENCES Adherent(id) ON DELETE CASCADE,
    FOREIGN KEY (id_cours_collectif) REFERENCES CoursCollectif(id) ON DELETE CASCADE
);

CREATE TABLE Club_Adherent (
    id SERIAL PRIMARY KEY,
    id_club INT NOT NULL,
    id_adherent INT NOT NULL,
    FOREIGN KEY (id_club) REFERENCES Club(id) ON DELETE CASCADE,
    FOREIGN KEY (id_adherent) REFERENCES Adherent(id) ON DELETE CASCADE,
    UNIQUE (id_club, id_adherent)
);
