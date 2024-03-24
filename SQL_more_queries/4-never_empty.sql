-- Script that creates the table id_not_null
-- I fthe table already exists, the script shouldn't fail
CREATE TABLE IF NOT EXISTS id_not_null (id INT DEFAULT 1, name VARCHAR(256));
