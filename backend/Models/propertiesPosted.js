const db = require('../Database/database.js');

module.exports = class Properties{
    constructor(userId, propertyTitle, propertyDescription){
        this.userId = userId;
        this.propertyTitle = propertyTitle;
        this.propertyDescription = propertyDescription;
    }
    
    static fetch() {
        return db.execute('SELECT user_information.userId, user_information.username, user_information.email, properties_posted.propertyId, properties_posted.propertyTitle, properties_posted.propertyDescription, DATE_FORMAT(properties_posted.dateCreated, "%M %e,%Y %l:%i%p") as dateCreated_Formated FROM user_information, properties_posted WHERE properties_posted.userId = user_information.userId');
    }

    static post(property) {
        return db.execute('INSERT INTO properties_posted (userId, propertyTitle, propertyDescription) VALUES (?, ?, ?)', 
            [property.userId, property.propertyTitle, property.propertyDescription]);
    }

    static delete(propertyId){
        return db.execute('DELETE FROM properties_posted WHERE propertyId = ?', [propertyId]);
    }
}