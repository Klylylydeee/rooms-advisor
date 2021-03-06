// Characteristics or properties of the user table within the mysql
// which consist of userId, username, email, and password
export interface Username {
    userId: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    userPicture: string;
}