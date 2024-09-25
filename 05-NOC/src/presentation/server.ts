import { CheckService } from "../domain/uses-cases/checks/check-service";
import { SendEmailLogs } from "../domain/uses-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(new FileSystemDatasource);
const emailService = new EmailService();
export class Server {

    static start() {
        console.log('Server Started...');
        // Mandar email
        // CronService.crateJob(
        //     '*/2 * * * * *',
        //     () => {
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log('Succes!'),
        //             (error) => console.log(error),
        //         ).execute('http://localhost:3000');
        //     }
        // );  
        new SendEmailLogs(
            emailService,
            fileSystemLogRepository
        ).execute('hunteofgames@gmail.com');
        // emailService.sendEmailWithSystemLogs(
        //         'hunteofgames@gmail.com'
        // );
    }
}