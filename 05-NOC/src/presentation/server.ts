import { CheckService } from "../domain/uses-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
    static start() {
        console.log('Server Started...');
        CronService.crateJob(
            '*/2 * * * * *',
            () => {
                new CheckService(
                    () => console.log('Succes!'),
                    (error) => console.log(error)
                ).execute('http://localhost:3000');
            }
        );
    }
}