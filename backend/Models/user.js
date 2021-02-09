const db = require('../Database/database.js');

module.exports = class User{
    constructor(username, password, email){
        this.username = username;
        this.password = password;
        this.email = email;
    }
    
    static find(email) {
        return db.execute('SELECT * FROM user_information WHERE email = ?', [email]);
    }
    
    static save(user) {
        return db.execute('INSERT INTO user_information (username, password, email) VALUES (?, ?, ?)', 
            [user.username, user.password, user.email]);
    }
}