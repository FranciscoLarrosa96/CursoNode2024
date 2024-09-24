import 'dotenv/config';
import * as env from 'env-var';

export const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    MAIL : env.get('MAIL').required().asEmailString(),
    MAILKEY : env.get('MAILKEY').required().asString(),
    PROD : env.get('PROD').required().asBool()
}