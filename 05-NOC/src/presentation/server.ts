import { CronService } from "./cron/cron-service";

export class Server {
    static start() {
        console.log('Server Started...');
        CronService.crateJob(
            '*/1 * * * * *',
            () => {
                
            }
        );
    }
}