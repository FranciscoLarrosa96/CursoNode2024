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
            console.log('DB connection succes!!!');
        } catch (error) {
            console.log('DB connection error');

            throw error;
        }
    }
}

