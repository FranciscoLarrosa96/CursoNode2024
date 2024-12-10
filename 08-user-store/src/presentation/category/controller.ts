import { Request, Response } from "express";
import { CreateCategoryDto, CustomError } from "../../domain";



export class CategoryController {
    constructor() {

    }

    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ message: error.message });
        }

        return res.status(500).json({ message: 'Internal server error' });
    };


    createCategory = async (req: Request, res: Response) => {
        const [error, createcategoryDto] = CreateCategoryDto.create(req.body);
        if (error) {
            return res.status(400).json({ message: error });
        }
        res.json(req.body);
    };

    getCategories = async (req: Request, res: Response) => {
        res.json({ message: 'get categories' });
    };

}