-- Script that creates the table force_name
-- If the table force_name already exists, the script shouldn't fail
CREATE TABLE IF NOT EXISTS force_name (id INT, name VARCHAR(256) NOT NULL);
