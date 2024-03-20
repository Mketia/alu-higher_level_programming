-- Script that creates the MySQL server user user_0d_1
-- The user should have all privileges on a MySQL server
-- If the user already exists, the script should not fail
CREATE USER IF NOT EXISTS 'user_0d_1' IDENTIFIED BY 'user_0d_1_pwd';
GRANT ALL PRIVILEGES ON *.* TO 'user_0d_1';
