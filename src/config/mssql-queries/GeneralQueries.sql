-- Check all tables
SELECT * FROM Users;
SELECT * FROM Categories;
SELECT * FROM Catlogs;
SELECT * FROM Activities;

SELECT * FROM Users WHERE UserID = 1

UPDATE Categories SET isDefault = 1

DELETE Categories WHERE CategoryID IN (3,4)