const db = require('../Database/database.js');

module.exports = class Reviews{
    constructor(propertyId, userId, reviewComment, reviewRate){
        this.propertyId = propertyId
        this.userId = userId
        this.reviewComment = reviewComment
        this.reviewRate = reviewRate
    }
    
    static getReviews(propertyId) {
        return db.execute('SELECT pr.reviewId, pr.propertyId, pr.reviewRate, pr.reviewComment, DATE_FORMAT(pr.reviewDate, "%M %e,%Y %l:%i%p") as dateCreated, ui.userId as reviewerId, ui.firstName as reviewerFName, ui.lastName as reviewerLName, uipp.userId as propertyOwnerId, uipp.firstName as propertyOwnerFName, uipp.lastName as propertyOwnerLName FROM properties_review as pr LEFT JOIN properties_posted as pp ON pr.propertyId = pp.propertyId LEFT JOIN user_information as uipp ON pp.userId = uipp.userId LEFT JOIN user_information as ui on pr.userId = ui.userId WHERE pr.propertyId = ?', [propertyId]);
    }

    // static specificReview(){
    //     return db.execute("SELECT pr.reviewId, pr.propertyId, pr.reviewRate, pr.reviewComment, pr.reviewDate, ui.userId as reviewerId, ui.firstName as reviewerFName, ui.lastName as reviewerLName, uipp.userId as propertyOwnerId, uipp.firstName as propertyOwnerFName, uipp.lastName as propertyOwnerLName FROM properties_review as pr LEFT JOIN properties_posted as pp ON pr.propertyId = pp.propertyId LEFT JOIN user_information as uipp ON pp.userId = uipp.userId LEFT JOIN user_information as ui on pr.userId = ui.userId WHERE pr.reviewId = '3'")
    // }

    static addReview(datas) {
        return db.execute('INSERT INTO properties_review (propertyId, userId, reviewComment, reviewRate) VALUES (?, ?, ?, ?)', 
        [datas.propertyId, datas.userId, datas.reviewComment, datas.reviewRate ]);
    }
}