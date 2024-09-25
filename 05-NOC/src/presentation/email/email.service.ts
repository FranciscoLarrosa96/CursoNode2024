import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugins';


interface SendMailOptions {
    to: string;
    subject: string;
    htmlBody: string;
    // 
}

export class EmailService {

    private transporter = nodemailer.createTransport(
        {
            service: envs.MAILER_SERVICE,
            auth:
            {
                user: envs.MAIL,
                pass: envs.MAILKEY,
            }
        }
    );

    async sendEmail(options: SendMailOptions): Promise<boolean> {
        const { to, subject, htmlBody } = options;
        try {
            const sentInformation = await this.transporter.sendMail({
                to, subject, html: htmlBody
            });
            console.log("🚀 ~ EmailService ~ sendEmail ~ sentInformation:", sentInformation)

            return true;
        } catch (error) {
            return false;
        }
    }
}