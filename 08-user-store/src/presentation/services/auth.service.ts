import { bcryptAdapter, jwtAdapter } from "../../config";
import { UserModel } from "../../data";
import { CustomError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain";

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


    async login(loginUserDto: LoginUserDto) {
        // FindOne verifica si existe el usuario
        const user = await UserModel.findOne({
            email: loginUserDto.email
        });
        if (!user) {
            throw CustomError.badRequest('Invalid credentials');
        }

        // isMatch verifica si la contraseña es correcta
        const isMatch = bcryptAdapter.compare(loginUserDto.password, user.password);


        if (!isMatch) {
            throw CustomError.badRequest('Invalid credentials');
        }


        const { password, ...userEntity } = UserEntity.fromObject(user);

        const token = await jwtAdapter.generateToken({ id: user._id, email: user.email });

        if (!token) {
            throw CustomError.internalServerError('Error generating token');
        }

        return {
            user: userEntity,
            token
        }
    }
}