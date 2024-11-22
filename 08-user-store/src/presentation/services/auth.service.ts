import { UserModel } from "../../data";
import { CustomError, RegisterUserDto } from "../../domain";

export class AuthService {
    constructor() {

    }
    async registerUser(RegisterUserDto: RegisterUserDto) {
        const user = await UserModel.findOne(
            {
                email: RegisterUserDto.email
            }
        );
        if (user) {
            throw CustomError.badRequest('Email already registered');
        }
        return 'todo correcto';
    }
}