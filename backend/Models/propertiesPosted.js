const db = require('../Database/database.js');

module.exports = class Properties{
    constructor(propertyTitle, userId, propertyType, propertyAddress, propertyDescription, propertyImages){
        this.propertyTitle = propertyTitle;
        this.userId = userId;
        this.propertyType = propertyType;
        this.propertyAddress = propertyAddress;
        this.propertyDescription = propertyDescription;
        this.propertyImages = propertyImages
    }
    
    static fetch() {
        return db.execute('SELECT pp.propertyId, pp.propertyTitle, pp.propertyType, pp.propertyAddress, pp.propertyDescription, pp.propertyImages, DATE_FORMAT(pp.dateCreated, "%M %e,%Y %l:%i%p") as dateCreated_Formated, pp.userId, ui.firstName, ui.lastName, ui.username, ui.userPicture, ui.email FROM properties_posted as pp, user_information as ui WHERE pp.userId = ui.userId');
    }

    static view(propertyId) {
        return db.execute('SELECT pp.propertyId, pp.propertyTitle, pp.propertyType, pp.propertyAddress, pp.propertyDescription, pp.propertyImages, DATE_FORMAT(pp.dateCreated, "%M %e,%Y %l:%i%p") as dateCreated_Formated, pp.userId, ui.firstName, ui.lastName, ui.username, ui.userPicture, ui.email FROM properties_posted as pp, user_information as ui WHERE pp.propertyId = ? AND pp.userId = ui.userId' ,[propertyId])
    }

    static post(property) {
        return db.execute('INSERT INTO properties_posted (propertyTitle, userId, propertyType, propertyAddress, propertyDescription, propertyImages) VALUES (?, ?, ?, ?, ?, ?)', 
        [property.propertyTitle, property.userId, property.propertyType, property.propertyAddress, property.propertyDescription, property.propertyImages]);
    }

    static delete(propertyId){
        return db.execute('DELETE FROM properties_posted WHERE propertyId = ?', [propertyId]);
    }
}