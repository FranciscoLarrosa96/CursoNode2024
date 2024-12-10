import { Request, Response } from "express";
import { CustomError } from "../../domain";



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
        res.json({ message: 'create category' });
    };

    getCategories = async (req: Request, res: Response) => {
        res.json({ message: 'get categories' });
    };

}