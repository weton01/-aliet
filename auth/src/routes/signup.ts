import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.post(
    '/api/users/signup', 
    async ( req: Request, res: Response ) => { 
        console.log('creating user')
        return res.status(200).send('Userdasd created')
    }
)

export { router as signupRouter };
