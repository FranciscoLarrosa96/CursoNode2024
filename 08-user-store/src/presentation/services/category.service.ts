import { CategoryModel } from "../../data";
import { CreateCategoryDto, CustomError, UserEntity } from "../../domain";



export class CategoryService {
    constructor() {

    }

    createCategory = async (createCategoryDto: CreateCategoryDto, user: UserEntity) => {
        const categoryExist = await CategoryModel
            .findOne({ name: createCategoryDto.name });

        if (categoryExist) {
            throw CustomError.badRequest('Category already exists');
        }

        try {
            const newCategory = new CategoryModel(
                {
                    ...createCategoryDto,
                    user: user.id
                }
            );

            await newCategory.save();

            return {
                id: newCategory.id,
                name: newCategory.name, 
                available: newCategory.available,
            };
        } catch (error) {
            throw CustomError.internalServerError(`${error}`);
        }
    };

   async getCategories()  {
        return { message: 'get categories' };
    };
}