import { CheckService } from "../domain/uses-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";

const fileSystemLogRepository = new LogRepositoryImpl(new FileSystemDatasource);

export class Server {
    static start() {
        console.log('Server Started...');
        CronService.crateJob(
            '*/2 * * * * *',
            () => {
                new CheckService(
                    fileSystemLogRepository,
                    () => console.log('Succes!'),
                    (error) => console.log(error),
                ).execute('http://localhost:3000');
            }
        );
    }
}