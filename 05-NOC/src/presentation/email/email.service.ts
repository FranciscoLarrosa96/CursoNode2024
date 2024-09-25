import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugins';
import { LogRepository } from '../../domain/repository/log.repository';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';


interface SendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments: Attachments[];
}

interface Attachments {
    filename: string;
    path: string;
}

export class EmailService {

    constructor() { }

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
        const { to, subject, htmlBody, attachments = [] } = options;
        try {
            const sentInformation = await this.transporter.sendMail({
                to, subject, html: htmlBody, attachments
            });
            const log = new LogEntity(
                {
                    level: LogSeverityLevel.low,
                    message: 'Email sent',
                    origin: 'email.servise.ts'
                }
            );
            return true;
        } catch (error) {
            const log = new LogEntity(
                {
                    level: LogSeverityLevel.high,
                    message: 'Email not sent',
                    origin: 'email.servise.ts'
                }
            );
            return false;
        }
    }

    async sendEmailWithSystemLogs(to: string | string[]) {
        try {
            const subject = 'Logs del server';
            const htmlBody = `
                <h3> Logs del Servidor - NOC </h3>
                <p> Esto es un email de prueba de envio de archivos adjuntos</p>
            `
            const attachments: Attachments[] = [
                {
                    filename: 'logs-all.log', path: './logs/logs-all.log'
                },
                {
                    filename: 'logs-medium.log', path: './logs/logs-medium.log'
                },
                {
                    filename: 'logs-high.log', path: './logs/logs-high.log'
                }
            ];
            return this.sendEmail({
                to, subject, attachments, htmlBody
            });
        } catch (error) {
            console.log('Error al enviar email ');
        }
    }
}