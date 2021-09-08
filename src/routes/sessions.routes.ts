import { Router } from 'express';
import User from '../models/User';
import { getRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';
import  {sign} from 'jsonwebtoken';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';

const sessionsRouter= Router();

sessionsRouter.post('/',async (request, response) => {
  try{
    const { email, password } = request.body;
    const user = await getRepository(User).findOne({where: {email}});
    if(!user) {
        throw new AppError('Incorrect email/password', 401);
    }

    const passwordMatcher = await compare(password, user.password);

    if(!passwordMatcher) {
        throw new AppError('Incorrect email/password',401);
    }
    delete user.password;

    const { secret, expiresIn} = authConfig.jwt

    const token = sign({ }, secret ,{ expiresIn, subject: ''+user.id});

    return response.status(201).json({ user,token });
  }catch(err){
    throw new AppError('falha no login',401);
  }
})

export default sessionsRouter;
