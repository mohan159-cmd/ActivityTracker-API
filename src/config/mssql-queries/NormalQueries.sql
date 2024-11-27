UPDATE Users SET FirstName = 'First'
UPDATE Users SET LastName = 'Last'

EXEC sp_rename 'Users.Email', 'EmailAddress', 'COLUMN';

select * from Users

UPDATE Users SET EmailAddress = 'test123', FirstName = 'a', LastName = 'test1gmail@gmail.com', Password = 'test1@123' WHERE EmailAddress = '{0}'

SELECT * FROM Users WHERE EmailAddress = 'test1gmail@gmail.com'
DELETE FROM Users WHERE EmailAddress = 'test12'
DELETE FROM Categories WHERE UserID = 5

UPDATE Users
SET EmailAddress = 'firstuser@example.com',
    FirstName = 'First',
    LastName = 'LA',
	Password = 'firstuser'
WHERE UserID = 1;
 

SELECT * FROM Users WHERE EmailAddress = 'firstuser@example.com'
SELECT * FROM Categories

INSERT INTO Categories (Name,Description,UserID,isDefault) VALUES ('Cat 1', 'descv', 6, 0)

SELECT 
    CONSTRAINT_NAME
FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
WHERE TABLE_NAME = 'Activities' 
  AND CONSTRAINT_TYPE = 'FOREIGN KEY';

ALTER TABLE Activities
DROP CONSTRAINT FK__Activitie__UserI__02084FDA;

ALTER TABLE Activities
DROP COLUMN UserID;

SELECT * FROM Catlogs WHERE CategoryID = 2
SELECT * FROM Activities WHERE CatlogID = 3

INSERT INTO Catlogs (CategoryID,Name,Description,CreatedDate,UserID)
VALUES (2,'Mohan Noal T','ok ok','2018-04-20',1)

EXEC sp_rename 'Catlogs.Overview', 'Description', 'COLUMN';

UPDATE Activities SET UserID = 1

INSERT INTO Activities (CatlogID,Name,Overview,CreatedDate)
VALUES (2,'Mohan Noal T','ok ok','2018-04-20',1)





