import mongoose from "mongoose";
import { MongoDataBase } from "./init";


describe('init', () => {

    afterAll( () => {
        mongoose.connection.close();
    });

    test('should connect to MongoDB', async () => {
       const connect = await MongoDataBase.connect({
            dbName: process.env.MONGO_DB_NAME!,
            mongoUrl: process.env.MONGO_URL!
        });

        expect(connect).toBe(true);
    });

    test('should trow an error', async () => {
        try {
            await MongoDataBase.connect({
                dbName: 'test',
                mongoUrl: 'test'
            });
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
});

