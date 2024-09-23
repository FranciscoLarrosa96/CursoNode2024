import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';



export class FileSystemDatasource implements LogDataSource {

    private readonly logPath = 'logs/';
    private readonly alllogsPaht = 'logs/logs-low.log';
    private readonly mediumlogsPaht = 'logs/logs-medium.log';
    private readonly highlogsPaht = 'logs/logs-high.log';

    constructor() {
        this.createLogsFiles();
    }

    private createLogsFiles = () => {
        // pregunto si existe
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirSync(this.logPath);
        }

        [
            this.alllogsPaht,
            this.mediumlogsPaht,
            this.highlogsPaht
        ].forEach(path => {
            if (!fs.existsSync(path)) {
                fs.writeFileSync(path, '');
            }
        });
    }

    saveLog(log: LogEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }

}







