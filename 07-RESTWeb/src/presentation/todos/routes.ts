import { Router } from "express";
import { TodosController } from "./controler";




export class TodoRoutes {

    static get routes(): Router {

        const router = Router();
        const todoController = new TodosController();

        router.get('/', todoController.getTodos);


        return router;

    }



}