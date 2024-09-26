import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/uses-cases/checks/check-service";
import { SendEmailLogs } from "../domain/uses-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const logRepository = new LogRepositoryImpl(
    new FileSystemDatasource
    // new MongoLogDataSource
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
        //             () => console.log('Succes!'),
        //             (error) => console.log(error),
        //         ).execute('http://google.com');
        //     }
        // );
    }
}