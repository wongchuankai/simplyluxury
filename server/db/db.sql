CREATE DATABASE SimplyLuxury;

CREATE TABLE productitem (
    productid serial primary key,
    itemname VARCHAR(255),
    price NUMERIC,
    description VARCHAR(255),
    image VARCHAR(255)   
);

CREATE TABLE users (
    userID serial,
    username VARCHAR(255) UNIQUE PRIMARY KEY,
    password VARCHAR(255)
);