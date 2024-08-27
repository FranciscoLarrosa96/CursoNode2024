import winston, { format } from "winston";

const { combine, timestamp, json } = format;
// Configuracion basica
const logger = winston.createLogger({
    level: 'info',
    // Con el combine convino los formatos que necesito
    // En este caso el timestap y json
    format: combine(
        timestamp(),
        json()
    ),
    // defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));

// Recibe el servicio que utiliza el logger
export const buildLogger = (service: string) => {
    return {
        log: (message: string) => {
            logger.log('info', { message, service })
        },
        error: (message: string) => {
            logger.error('error =>', {
                message,
                service,

            })
        }
    }
}