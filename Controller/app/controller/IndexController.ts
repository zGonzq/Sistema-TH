import { Request, Response } from "express";
import axios from "axios";

export class IndexController {

    async index(req: Request, res: Response): Promise<void> {
        res.render('pages/index');
    }
}

