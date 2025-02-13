const dbqueries = {
    "users": {
       select_all_users: "SELECT * FROM Users",
       select_user_by_id: `SELECT * FROM Users WHERE UserID = '{0}'`,
       select_user_by_email: `SELECT * FROM Users WHERE EmailAddress = '{0}'`,
       check_user_credentials: `SELECT * FROM Users WHERE EmailAddress = '{0}' AND Password = '{1}'`,
       insert_user: "INSERT INTO Users (FirstName,LastName, EmailAddress, Password) VALUES ('{0}', '{1}', '{2}', '{3}')",
       update_user: "UPDATE Users SET EmailAddress = '{0}', FirstName = '{1}', LastName = '{2}', Password = '{3}' WHERE EmailAddress = '{0}'"
    },
    "categories": {
        categories_by_userid: "SELECT * FROM Categories where UserID = {0}",
        create_category_by_userid: "INSERT INTO Categories (Name,Description,UserID,isDefault) VALUES ('{0}', '{1}', {2}, 0)"
    },
    "catlogs": {
        select_catlogs_by_categoryId: "SELECT Catlogs.CatlogID, Catlogs.Name, Catlogs.Description,Catlogs.StartDate,Catlogs.EndDate, Catlogs.CategoryID, Categories.Name AS CategoryName FROM Catlogs JOIN Categories ON Catlogs.CategoryID = Categories.CategoryID WHERE Categories.CategoryID = {0}",
        create_catlog: "INSERT INTO Catlogs (CategoryID, Name, Description, CreatedDate) VALUES ('{0}', '{1}', '{2}', '{3}')"
    },
    "activities":{
        select_activities_by_catlogId: "SELECT * FROM Activities WHERE CatlogID = {0}",
        select_activity_by_id: "SELECT * FROM Activities WHERE ActivityID = {0}",
        create_activity_by_catlogId: "INSERT INTO Activities (CatlogID,Name,Description,CreatedDate,StartDate,EndDate,Image) VALUES ({0}, '{1}', '{2}', '{3}', '{4}','{5}','{6}')",
        update_activity_by_id: "UPDATE Activities SET Name = '{0}', Description = '{1}', StartDate = '{2}', EndDate = '{3}' WHERE ActivityID = {4}"
    }
}

module.exports = { dbqueries };