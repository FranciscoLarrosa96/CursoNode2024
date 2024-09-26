import mongoose from "mongoose";

interface ConnectionOptions {
    mongoUrl: string;
    dbName: string;
}


export class MongoDataBase {

    static async connect(options: ConnectionOptions) {
        const { mongoUrl, dbName } = options;
        try {
            await mongoose.connect(mongoUrl, {
                dbName
            });
            console.log('DB Mongo connection succes!!!');
        } catch (error) {
            console.log('DB Mongo connection error');

            throw error;
        }
    }
}

