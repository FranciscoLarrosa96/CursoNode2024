import { Request, Response } from "express";


export class AuthController {
    constructor() { }

    register(req: Request, res: Response) {
        res.json({ message: 'register' });
    }

    login(req: Request, res: Response) {
        res.json({ message: 'login' });
    }

    validateEmail(req: Request, res: Response) {
        console.log(req.params.token);
        
        res.json({ message: 'validate-email' });
    }
}