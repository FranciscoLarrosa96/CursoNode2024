import { LogEntity } from "../../entities/log.entity";
import { CheckService } from "./check-service";


describe('CheckService UseCase', () => {
    const mockLogRepository = {
        saveLog: jest.fn(),
        getLogs: jest.fn()
    };

    const successCallback = jest.fn();
    const errorCallback = jest.fn();

    const checkService = new CheckService(
        mockLogRepository,
        successCallback,
        errorCallback
    );

    beforeEach(() => {
        jest.clearAllMocks();
    });
    test('should call successCallback when fetch returns true', async () => {
        await checkService.execute('http://google.com');

        const wasOK = await checkService.execute('http://google.com');

        expect(wasOK).toBe(true);
        expect(successCallback).toHaveBeenCalled();
        expect(errorCallback).not.toHaveBeenCalled();
        expect(mockLogRepository.saveLog).toHaveBeenCalledWith(
            expect.any(LogEntity)
        );
    });
    test('should call successCallback when fetch returns false', async () => {
        await checkService.execute('http://google.com');

        const wasOK = await checkService.execute('http://test.com');

        expect(wasOK).toBe(false);
        expect(successCallback).not.toHaveBeenCalled();
        expect(errorCallback).toHaveBeenCalled();
        expect(mockLogRepository.saveLog).toHaveBeenCalledWith(
            expect.any(LogEntity)
        );
    });


});