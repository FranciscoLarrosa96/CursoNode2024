import { envs } from "../../config";
import { CategoryModel } from "../../data";
import { CreateCategoryDto, CustomError, PaginationDto, UserEntity } from "../../domain";



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

    async getCategories(pagination: PaginationDto) {
        const { page, limit } = pagination;
        try {

            const [total, categories] = await Promise.all([
                CategoryModel.countDocuments(),
                CategoryModel.find()
                    .skip((page - 1) * limit)
                    .limit(limit)
            ]);
            return {
                page,
                limit,
                total,
                next: `${envs.WEBSERVICE_URL}/categories?page=${page + 1}&limit=${limit}`,
                previous: `${envs.WEBSERVICE_URL}/categories?page=${page - 1}&limit=${limit}`,
                categories: categories.map(category => ({
                    id: category.id,
                    name: category.name,
                    available: category.available,
                })),
            };
        } catch (error) {
            throw CustomError.internalServerError(`${error}`);
        }

    };
}