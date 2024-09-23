import { CronJob } from "cron";


export class Server {
    static start() {
        console.log('Server Started...');
        const job = new CronJob(
            '*/1 * * * * *', // cronTime
            () => {
                console.log('You will see this message every second');
            },
        );
        job.start();
    }
}