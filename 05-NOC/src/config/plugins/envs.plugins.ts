import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    MAIL : env.get('MAILER_EMAIL').required().asEmailString(),
    MAILKEY : env.get('MAILER_SECRET_KEY').required().asString(),
    PROD : env.get('PROD').required().asBool()
}