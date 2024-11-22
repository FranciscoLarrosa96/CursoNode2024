import jwt from 'jsonwebtoken';

export class jwtAdapter {

    static async generateToken(payload: any, expiresIn: string = '2h') {
        return new Promise((resolve) => {
            jwt.sign(payload, "SEED", { expiresIn }, (err, token) => {
                if (err) {
                    return resolve(null);
                }

                resolve(token);
            });
        });


    }

    static async verifyToken(token: string) {

    }
}