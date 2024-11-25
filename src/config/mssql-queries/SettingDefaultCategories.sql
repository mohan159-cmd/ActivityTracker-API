SELECT * FROM Users;
SELECT * FROM Categories;
SELECT * FROM Catlogs;
SELECT * FROM Activities;


CREATE TRIGGER InsertDefaultCategories
ON Users
AFTER INSERT
AS
BEGIN
    DECLARE @NewUserID INT;

    -- Retrieve the UserID of the newly inserted user
    SELECT @NewUserID = UserID FROM INSERTED;

    -- Insert default categories for the new user
    INSERT INTO Categories(Name, Description, UserID)
    VALUES 
      ('Games', 'All types of video games, including action, strategy, and adventure games.', @NewUserID),
      ('Movies', 'Collection of various movie genres including action, drama, and comedy.', @NewUserID);
END;