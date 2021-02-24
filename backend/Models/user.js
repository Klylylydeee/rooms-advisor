const db = require('../Database/database.js');

module.exports = class User{
    constructor(username, password, email, userPicture){
        this.username = username;
        this.password = password;
        this.email = email;
        this.userPicture = userPicture;
    }
    
    static find(email) {
        return db.execute('SELECT * FROM user_information WHERE email = ?', [email]);
    }
    static login(username) {
        return db.execute('SELECT * FROM user_information WHERE username = ?', [username]);
    }
    
    static save(user) {
        return db.execute('INSERT INTO user_information (username, password, email, userPicture) VALUES (?, ?, ?, ?)', 
            [user.username, user.password, user.email, user.userPicture]);
    }
}