import { bcryptAdapter } from "../../config";
import { UserModel } from "../../data";
import { CustomError, RegisterUserDto, UserEntity } from "../../domain";

export class AuthService {
    constructor() {

    }
    async registerUser(registerUserDto: RegisterUserDto) {
        const user = await UserModel.findOne(
            {
                email: registerUserDto.email
            }
        );
        if (user) {
            throw CustomError.badRequest('Email already registered');
        }

        try {

            const newUser = new UserModel(registerUserDto);
            // Encriptar la contraseña
            
            
            newUser.password = bcryptAdapter.hash(registerUserDto.password);

            await newUser.save();


            // JWT para autenticar al usuario


            // Email de validación

            const { password, ...userEntity } = UserEntity.fromObject(newUser);

            return { user: userEntity, token: 'ABC' };
        } catch (error) {
            throw CustomError.internalServerError(`${error}`);
        }
    }
}