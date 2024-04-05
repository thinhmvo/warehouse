-- Create the 'account' table
CREATE TABLE account (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    password VARCHAR(256)
);

-- Create the 'warehouse' table
CREATE TABLE warehouse (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    capacity INTEGER,
    available INTEGER
);

-- Create the 'item' table
CREATE TABLE item (
    car_vin VARCHAR(50) PRIMARY KEY,
    warehouse_id INTEGER,
    make VARCHAR(50),
    model VARCHAR(50),
    color VARCHAR(50),
    imgId VARCHAR(256),
    year INTEGER,
    CONSTRAINT fk_warehouse
        FOREIGN KEY(warehouse_id) 
        REFERENCES warehouse(id)
        ON DELETE CASCADE
);
