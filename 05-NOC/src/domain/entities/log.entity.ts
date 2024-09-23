
export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high'
}




export class LogEntity {

    level: LogSeverityLevel;
    message: string;
    createdAt: Date;

    constructor(message: string, level: LogSeverityLevel) {
        this.message = message;
        this.level = level;
        this.createdAt = new Date();
    }

}