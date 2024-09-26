import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

// Un caso de uso es un codigo que esta especializado en una tarea
export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ) { }

    async execute(url: string): Promise<boolean> {

        try {
            const req = await fetch(url);
            if (!req.ok) {
                throw new Error(`Error on Check Service ${url}`);
            }
            const log = new LogEntity(
                {
                    message: `Service ${url} working`,
                    level: LogSeverityLevel.low,
                    origin: 'check-service.ts'
                }
            );
            this.successCallback();
            this.logRepository.saveLog(log);
            return true;
        } catch (error) {
            const errorMessage = `${url} is not OK. ${error}`;
            const log = new LogEntity(
                {
                    message: errorMessage,
                    level : LogSeverityLevel.high,
                    origin : 'check-service.ts'
                }
            );
            this.logRepository.saveLog(log);
            this.errorCallback(errorMessage);
            return false;
        }
    }
}