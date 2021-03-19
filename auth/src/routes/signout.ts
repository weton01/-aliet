import express, { Request, Response } from 'express';
import { body } from 'express-validator';

const router = express.Router();

router.post(
    '/api/users/signout', 
    async ( req: Request, res: Response ) => { 
        req.session = null;
      
        res.send(req.session);
    }
)

export { router as signoutRouter };
