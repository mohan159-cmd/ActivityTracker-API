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

INSERT INTO Categories (Name,Description,UserID,isDefault)
VALUES ('Cat 1', 'descv', 6, 0)

SELECT * FROM Catlogs WHERE CategoryID = 2