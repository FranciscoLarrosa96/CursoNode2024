import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

// Sirve para que cualquier clase implete esta clase, tiene que tener lo que esta definido en la misma
export abstract class LogDataSource {
    // Cualquiero origen de datos tiene que implementar esto
    abstract saveLog(log: LogEntity): Promise<void>;
    abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}

