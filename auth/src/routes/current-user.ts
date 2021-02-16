import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.post(
    '/api/users/current-user', 
    async ( req: Request, res: Response ) => { 
        return res.status(200).send('User signout')
    }
)

export { router as currentUserRouter };
