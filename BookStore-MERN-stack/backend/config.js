//export const PORT = 5555;
export const PORT = process.env.PORT || 5555;


//export const mongoDBURL = 'mongodb://localhost:27017/books-collection';

export const mongoDBURL = process.env.MONGODB_URL || 'mongodb+srv://root:1234@books-store-mern.4bxfsw3.mongodb.net/books-collection?appName=Books-Store-MERN';
