import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/uses-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/uses-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/uses-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDataSource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const logRepository = new LogRepositoryImpl(
    // new FileSystemDatasource
    // new MongoLogDataSource
    new PostgresLogDataSource
);
// Datasources...
const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource
);
const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDataSource
);
const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDataSource
);


const emailService = new EmailService();


export class Server {

    static async start() {
        console.log('Server Started...');
        // Mandar email
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository
        // ).execute('hunteofgames@gmail.com');
        // emailService.sendEmailWithSystemLogs(
        //         'hunteofgames@gmail.com'
        // );        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository
        // ).execute('hunteofgames@gmail.com');
        // emailService.sendEmailWithSystemLogs(
        //         'hunteofgames@gmail.com'
        // );
        // const logs = await logRepository.getLogs(LogSeverityLevel.high);
        // console.log("🚀 ~ Server ~ start ~ logs:", logs);
        // CronService.crateJob(
        //     '*/5 * * * * *',
        //     () => {
        //         new CheckService(
        //             logRepository,
        //             () =>console.log("🚀 ~ Server ~ start ~ CheckService: Succes"),
        //             (error) => console.log(error),
        //         ).execute('http://google.com');
        //     }
        // );
        // Multiples Repositories
        CronService.crateJob(
            '*/5 * * * * *',
            () => {
                new CheckServiceMultiple(
                    [fileSystemLogRepository, mongoLogRepository, postgresLogRepository],
                    () => console.log("🚀 ~ Server ~ start ~ CheckService: Succes"),
                    (error) => console.log(error),
                ).execute('http://google.com');
            }
        );
    }
}