CREATE DATABASE IF NOT EXISTS farm_db;

USE farm_db;

-- Create table for collecting data
CREATE TABLE IF NOT EXISTS cows_and_goats (
    id VARCHAR(8) PRIMARY KEY,         
    age_years INT,                     
    age_months INT,                    
    udder_count INT                    
);

-- Insert sample data
INSERT INTO cows_and_goats (id, age_years, age_months, udder_count) VALUES
('12345678', 5, 3, 4),
('23456789', 7, 6, 3),
('34567890', 4, 8, 4),
('45678901', 6, 2, 4),
('56789012', 8, 11, 3),
('67890123', 3, 5, 4),
('78901234', 9, 10, 4),
('89012345', 2, 1, 3),
('90123456', 4, 0, 4),
('01234567', 10, 9, 4),
('11234567', 1, 7, 3),
('21234567', 0, 6, 4),
('31234567', 3, 2, 4),
('41234567', 6, 4, 3),
('51234567', 5, 11, 4);

-- Insert goat data with NULL values for udder_count
INSERT INTO cows_and_goats (id, age_years, age_months, udder_count) VALUES
('87654321', NULL, NULL, NULL),
('98765432', NULL, NULL, NULL);

