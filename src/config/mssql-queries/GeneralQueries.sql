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

--remove froegin keys from a table
SELECT 
    CONSTRAINT_NAME
FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
WHERE TABLE_NAME = 'Catlogs' 
  AND CONSTRAINT_TYPE = 'FOREIGN KEY';

ALTER TABLE Catlogs
DROP CONSTRAINT FK__Catlogs__UserID__7E37BEF6;

ALTER TABLE Catlogs
DROP COLUMN UserID;

--add forign key

ALTER TABLE Activities
ADD UserID INT; -- Adjust the data type to match the Users table primary key

ALTER TABLE Activities
ADD CONSTRAINT FK_Activities_UserID
FOREIGN KEY (UserID)
REFERENCES Users(UserID)
ON DELETE CASCADE; -- Optional: adjust ON DELETE behavior as needed

SELECT 
    CONSTRAINT_NAME,
    TABLE_NAME,
    COLUMN_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE TABLE_NAME = 'Activities';

SELECT * FROM Users;
SELECT * FROM Categories;
SELECT * FROM Catlogs;
SELECT * FROM Activities;

--joints
SELECT
   Catlogs.CatlogID,
   Catlogs.Name,
   Catlogs.Overview,
   Catlogs.CategoryID,
   Categories.Name AS CategoryName
FROM
   Catlogs
JOIN 
   Categories ON Catlogs.CategoryID = Categories.CategoryID;

SELECT Catlogs.CatlogID, Catlogs.Name, Catlogs.Overview, Catlogs.CategoryID, Categories.Name AS CategoryName FROM Catlogs JOIN Categories ON Catlogs.CategoryID = Categories.CategoryID WHERE Categories.CategoryID = 2

