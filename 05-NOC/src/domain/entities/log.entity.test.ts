import { LogEntity, LogSeverityLevel } from "./log.entity";


describe('LogEntity', () => {

    test('should create a new LogEntity instance', () => {

        const dataObj = {
            level: LogSeverityLevel.low,
            message: 'This is a log message',
            origin: 'log.entity.test.ts'
        };


        const log = new LogEntity(dataObj);

        expect(log).toBeInstanceOf(LogEntity);

        expect(log.level).toBe(dataObj.level);
        expect(log.message).toBe(dataObj.message);
        expect(log.origin).toBe(dataObj.origin);
        expect(log.createdAt).toBeInstanceOf(Date);

    });

    test('should create a new LogEntity instance from JSON', () => {
        const json = 
        `{"message":"Service http://google.com working","level":"low","createdAt":"2024-09-26T19:54:45.238Z","origin":"check-service.ts"}`;
        const log = LogEntity.fromJson(json);

        expect(log).toBeInstanceOf(LogEntity);
        expect(log.level).toBe(LogSeverityLevel.low);
        expect(log.message).toBe('Service http://google.com working');
        expect(log.origin).toBe('check-service.ts');
        expect(log.createdAt).toBeInstanceOf(Date);

    });


    test('should create a new LogEntity instance from object', () => {
        const obj = {
            message: 'Service http://google.com working',
            level: LogSeverityLevel.low,
            createdAt: new Date('2024-09-26T19:54:45.238Z'),
            origin: 'check-service.ts'
        };
        const log = LogEntity.fromObject(obj);

        expect(log).toBeInstanceOf(LogEntity);
        expect(log.level).toBe(LogSeverityLevel.low);
        expect(log.message).toBe('Service http://google.com working');
        expect(log.origin).toBe('check-service.ts');
        expect(log.createdAt).toBeInstanceOf(Date);

    });

});