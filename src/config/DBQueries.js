const dbqueries = {
    "users": {
       select_all_users: "SELECT * FROM Users",
       select_user_by_id: `SELECT * FROM Users WHERE UserID = {0}`,
       select_user_by_email: `SELECT * FROM Users WHERE email = {0}`,
       insert_user: "INSERT INTO Users (firstName, lastName, email, password) VALUES ({0}, {1}, {2}, {3})",
    }
}

module.exports = { dbqueries };