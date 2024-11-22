import { Request, Response } from "express";
import { RegisterUserDto } from "../../domain";
import { AuthService } from "../services/auth.service";


export class AuthController {
    constructor(public readonly authService: AuthService) { }

    register = (req: Request, res: Response) => {

        const [error, registerDto] = RegisterUserDto.create(req.body);

        if (error) {
            res.status(400).json({ message: error });
            return 
        }
        this.authService.registerUser(registerDto!)
            .then((user) => {
                res.json(user);
            });
    }

    login(req: Request, res: Response) {
        res.json({ message: 'login' });
    }

    validateEmail(req: Request, res: Response) {
        console.log(req.params.token);

        res.json({ message: 'validate-email' });
    }
}