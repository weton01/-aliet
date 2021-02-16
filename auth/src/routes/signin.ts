import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.post(
    '/api/users/signin', 
    async ( req: Request, res: Response ) => { 
        return res.status(200).send('User signin')
    }
)

export { router as signinRouter };
