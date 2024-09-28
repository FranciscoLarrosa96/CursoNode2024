import mongoose from "mongoose";
import { MongoDataBase } from "../init";
import { LogModel } from "./log.model";


describe('log model', () => {

    beforeAll(async () => {
        await MongoDataBase.connect({
            dbName: process.env.MONGO_DB_NAME!,
            mongoUrl: process.env.MONGO_URL!
        });
    });

    afterAll(() => {
        mongoose.connection.close();
    });

    test('should return LogModel', async () => {
        const logData = {
            message: 'test',
            origin: 'test',
            level: 'low'
        };

        const log = await LogModel.create(logData);

        expect(log).toEqual(
            expect.objectContaining(
                {
                    ...logData,
                    id: expect.any(String),
                    createdAt: expect.any(Date)
                }
            )
        );

        await LogModel.findByIdAndDelete({ _id: log.id });
    });


    test('should return an schema object', async () => {
        const schema = LogModel.schema.obj;
        expect(schema).toEqual(expect.objectContaining(
            {
                message: { type: expect.any(Function), require: true },
                origin: { type: expect.any(Function) },
                level: {
                    type: expect.any(Function),
                    enum: ['low', 'medium', 'high'],
                    default: 'low'
                },
                createdAt: expect.any(Object)
            }
        ));
    });
}); 