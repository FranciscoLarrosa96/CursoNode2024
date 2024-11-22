import { Request, Response } from "express";
import { CustomError, RegisterUserDto } from "../../domain";
import { AuthService } from "../services/auth.service";


export class AuthController {
    constructor(public readonly authService: AuthService) { }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return  res.status(error.statusCode).json({ message: error.message });
        }

        return res.status(500).json({ message: 'Internal server error' });
    };

    register = (req: Request, res: Response) => {

        const [error, registerDto] = RegisterUserDto.create(req.body);

        if (error) {
            res.status(400).json({ message: error });
            return
        }
        this.authService.registerUser(registerDto!)
            .then((user) => {
                res.json(user);
            })
            .catch((error) => {
                this.handleError(error, res);
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