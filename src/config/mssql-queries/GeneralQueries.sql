-- Check all tables
SELECT * FROM Users;
SELECT * FROM Categories;
SELECT * FROM Catlogs;
SELECT * FROM Activities;

SELECT * FROM Users WHERE UserID = 1

--Update values
UPDATE Categories SET isDefault = 1

--Delete values
DELETE Categories WHERE CategoryID IN (3,4)

--Inserting Values in to table
INSERT INTO Users (FirstName,LastName, Email, Password)
VALUES ('firstuser', 'firstuser@example.com', 'firstuser');

INSERT INTO Users (FirstName,LastName, Email, Password)
VALUES ('test1', 'a', 'test1gmail@gmail.com', 'test1@123')

-- Altering the table columns

ALTER TABLE Users
DROP COLUMN Username;

ALTER TABLE Users
ADD FirstName VARCHAR(100);

ALTER TABLE Users
ADD LastName VARCHAR(100);

--renamin columns
EXEC sp_rename 'Users.Email', 'EmailAddress', 'COLUMN';

