import { UserModel } from "../../data";
import { CustomError, RegisterUserDto, UserEntity } from "../../domain";

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

        try {
            const newUser = new UserModel(RegisterUserDto);
            await newUser.save();

            // Encriptar la contraseña

            // JWT para autenticar al usuario


            // Email de validación

            const { password, ...userEntity } = UserEntity.fromObject(newUser);

            return {user :userEntity, token: 'ABC' };
        } catch (error) {
            throw CustomError.internalServerError(`${error}`);
        }
    }
}