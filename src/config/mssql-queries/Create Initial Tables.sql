-- Create Users table
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Username NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL,
    Password NVARCHAR(200) NOT NULL,  -- You can store hashed passwords here
    CreatedAt DATETIME DEFAULT GETDATE()
);

-- Insert sample user data
INSERT INTO Users (Username, Email, Password)
VALUES ('firstuser', 'firstuser@example.com', 'firstuser');

-- Create Categories table and add UserID reference
CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Description NVARCHAR(MAX),
    UserID INT,  -- Reference to the user who owns the category
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Insert default categories for the user
INSERT INTO Categories(Name, Description, UserID)
VALUES 
  ('Games', 'All types of video games, including action, strategy, and adventure games.', 1),
  ('Movies', 'Collection of various movie genres including action, drama, and comedy.', 1);

ALTER TABLE Categories
ADD isDefault BIT;

-- Create Catlogs table and add UserID reference
CREATE TABLE Catlogs (
    CatlogID INT PRIMARY KEY IDENTITY(1,1),
    CategoryID INT NOT NULL,  -- Reference to the category of the catalog
    Name NVARCHAR(200) NOT NULL,
    Overview NVARCHAR(MAX),
    ReleaseDate DATE,
    UserID INT,  -- Reference to the user who owns the catalog
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Insert catalog records for the user
INSERT INTO Catlogs(CategoryID, Name, Overview, ReleaseDate, UserID)
VALUES
  (1, 'PUBG', 'A battle royale game where players fight to be the last one standing.', '2017-03-23', 1),
  (1, 'God of War', 'An action-adventure game that follows the journey of Kratos in Norse mythology.', '2018-04-20', 1),
  (2, 'Avengers: Endgame', 'The final battle between the Avengers and Thanos.', '2019-04-26', 1),
  (2, 'The Dark Knight', 'A superhero movie featuring Batman fighting against the Joker.', '2008-07-18', 1);

-- Create Activities table and add UserID reference
CREATE TABLE Activities (
    ActivityID INT PRIMARY KEY IDENTITY(1,1),
    CatlogID INT NOT NULL,  -- Reference to the catalog the activity belongs to
    Name NVARCHAR(200) NOT NULL,
    Overview NVARCHAR(MAX),
    ReleaseDate DATE,
    UserID INT,  -- Reference to the user who owns the activity
    FOREIGN KEY (CatlogID) REFERENCES Catlogs(CatlogID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Insert activity records for the user
INSERT INTO Activities(CatlogID, Name, Overview, ReleaseDate, UserID)
VALUES
  (1, 'Matchmaking', 'A system where players are matched with opponents in a competitive game.', '2017-03-23', 1),
  (1, 'Battlegrounds', 'The actual battlefield where players fight to survive.', '2017-03-23', 1),
  (2, 'Okie', 'Dokie', '2024-09-19', 1),
  (3, 'Final Battle', 'The climactic battle between the Avengers and Thanos.', '2019-04-26', 1),
  (3, 'Time Heist', 'The Avengers travel through time to collect the Infinity Stones.', '2019-04-26', 1),
  (4, 'Okie', 'Dokie', '2024-09-19', 1);

-- Create the trigger to insert default categories for new users




-- Check all tables
SELECT * FROM Users;
SELECT * FROM Categories;
SELECT * FROM Catlogs;
SELECT * FROM Activities;
