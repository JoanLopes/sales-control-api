import { Router } from 'express';
import User from '../models/User';
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import AppError from '../errors/AppError';


const userRouter= Router();
userRouter.use(ensureAuthenticated);

function getRep(){
  const userRepository = getRepository(User);
  return userRepository;
}

userRouter.get('/',async (request, response) => {
  try{
    const users = await getRep().find();
    return response.status(200).json(users);
  }catch(err){
    console.log('err.message:>>', err);
    throw new AppError('error get user');
  }
})

userRouter.get('/:id',async (request, response) => {
    try{
      const {id} = request.params;
      const user = await getRep().findOne(id);
      delete user.password
      return response.status(200).json(user);
    }catch(err){
      console.log('err.message:>>', err);
      throw new AppError('error get user');
    }
  })

userRouter.post('/',async (request, response) => {
  try{
    const { name, email , password,salesmanId } = request.body;
    const hashedPasssword = await hash(password,8);
    const user = await getRep().save({  name, email , password: hashedPasssword, salesman:salesmanId });
    delete user.password;
    return response.status(201).json(user);
  }catch(err){
    console.log('err.message:>>', err);
    throw new AppError('error creating user');
  }
})

userRouter.put('/:id',async (request, response) => {
  try{

    const {id} = request.params;
    const { name, email , password,salesmanId } = request.body;
    const user = await getRep().findOne(id);
    const hashedPasssword = await hash(password,8);
    const userUpdated = await getRep().save({  name, email , password: hashedPasssword, salesman:salesmanId });
    delete user.password;
    return response.status(201).json(userUpdated);
  }catch(err){
    console.log('err.message:>>', err);
    throw new AppError('error updating user ');
  }
});

userRouter.delete('/:id',async (request, response) => {
    try{
      const { id } = request.params;
      const user = await getRep().delete(id);
      return response.status(200).json( { message: "deleteded"});
    }catch(err){
      console.log('err.message:>>', err);
      throw new AppError('error get user ');
    }
});

export default userRouter;
