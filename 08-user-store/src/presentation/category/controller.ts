import { Request, Response } from "express";
import { CreateCategoryDto, CustomError } from "../../domain";
import { CategoryService } from "../services/category.service";



export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {

    }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ message: error.message });
        }

        return res.status(500).json({ message: 'Internal server error' });
    };


    createCategory = (req: Request, res: Response) => {
        const [error, createcategoryDto] = CreateCategoryDto.create(req.body);
        if (error) {
            return res.status(400).json({ message: error });
        }

        this.categoryService.createCategory(createcategoryDto!, req.body.user)
            .then((category) => {
                res.status(201).json(category);
            })
            .catch((error) => {
                this.handleError(error, res);
            });
    };

    getCategories = async (req: Request, res: Response) => {
        try {
            const categories = await this.categoryService.getCategories();
            res.status(200).json(categories);
        } catch (error) {
            this.handleError(error, res);
        }
    };

}