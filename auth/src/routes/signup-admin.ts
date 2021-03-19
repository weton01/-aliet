import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { UserTypes } from '../events/types/user-types';

import { BadRequestError } from '../errors/bad-request-error';
import { validateRequest } from '../middlewares/validate-request'

import { User } from '../models/user';

const router = express.Router();

router.post(
    '/api/users/signupAdmin', 
    [
        body('email').isEmail().withMessage('E-mail must be valid'),
        body('password')
            .trim()
            .isLength({ min: 4, max: 20 })
            .withMessage('Password must be between 4 and 20 characters'),
        body('name')
            .trim()
            .isString()
            .notEmpty(),
        body('lastName')
            .trim()
            .isString()
            .notEmpty(),
        body('cpf')
            .trim()
            .isLength({ min:11, max: 11 })
            .withMessage('Password must be 11 characters'),
    ],
    validateRequest,
    async ( req: Request, res: Response ) => {
        const {email, password, name, lastName, cpf} = req.body;
        const type = UserTypes.Admin;
        const active = true;

        const existingUser = await User.findOne({ email });
    
        if (existingUser) {
          throw new BadRequestError('Email in use');
        }
    
        const user = User.build({ 
          email, 
          password, 
          name, 
          lastName, 
          cpf, 
          type,
          active
        });

        await user.save();
    
        res.status(201).send(user);
    }
)

export { router as signupAdminRouter };


