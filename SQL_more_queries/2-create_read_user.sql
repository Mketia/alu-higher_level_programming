-- Script that creates the database hbtn_0d_2 and the user_0d_02
-- The user should only have SELECT privilege in the database
-- The user password should be set to user_0d_2_pwd
-- I both the database and the user exist, the scripts should not fail
CREATE DATABASE IF NOT EXISTS hbtn_0d_2;
CREATE USER IF NOT EXISTS user_0d_2 IDENTIFIED BY user_0d_2_pwd;
GRANT SELECT on hbtn_0d_2.* TO user_0d_2@localhost;
