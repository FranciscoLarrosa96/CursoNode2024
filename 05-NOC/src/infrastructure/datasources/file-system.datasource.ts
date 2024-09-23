import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';



export class FileSystemDatasource implements LogDataSource {

    private readonly logPath = 'logs/';
    private readonly allLogsPaht = 'logs/logs-all.log';
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
            this.allLogsPaht,
            this.mediumlogsPaht,
            this.highlogsPaht
        ].forEach(path => {
            if (!fs.existsSync(path)) {
                fs.writeFileSync(path, '');
            }
        });
    }

    async saveLog(newLog: LogEntity): Promise<void> {

        const logAsJson = `${JSON.stringify(newLog)}\n`;

        fs.appendFileSync(this.allLogsPaht, logAsJson)

        if (newLog.level === LogSeverityLevel.low) {
            return;
        }
        if (newLog.level === LogSeverityLevel.medium) {
            fs.appendFileSync(this.mediumlogsPaht, logAsJson);
        }else{
            fs.appendFileSync(this.highlogsPaht, logAsJson);
        }
    }
    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }

}







