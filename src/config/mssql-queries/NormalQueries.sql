UPDATE Users SET FirstName = 'First'
UPDATE Users SET LastName = 'Last'

EXEC sp_rename 'Users.Email', 'EmailAddress', 'COLUMN';



SELECT * FROM Users WHERE EmailAddress = 'firstuser@example.com'