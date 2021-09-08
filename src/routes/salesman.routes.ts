import { Router } from 'express';
import Salesman from './../models/Salesman';
import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import AppError from '../errors/AppError';


const salesmanRouter= Router();
salesmanRouter.use(ensureAuthenticated);

function getRep(){
  const salesmanRepository = getRepository(Salesman);
  return salesmanRepository;
};

salesmanRouter.get('/',async (request, response) => {
  try{
    const salesman = await getRep().find({ relations: ['person']});

    return response.status(200).json(salesman);
  }catch(err){
    console.log('err.message:>>', err);
    throw new AppError('error get salesman ');
  }
});

salesmanRouter.get('/:id',async (request, response) => {
    try{
      const { id } = request.params;
      const salesman = await getRep().findOne({ where: {codeId: id}, relations: ['person']});

      return response.status(200).json(salesman);
    }catch(err){
      console.log('err.message:>>', err);
      throw new AppError('error get salesman');
    }
});

salesmanRouter.post('/',async (request, response) => {
  try{
    const { codeId, personId } = request.body;
    const salesman = await getRep().save({ codeId, person:personId });
    return response.status(201).json(salesman);
  }catch(err){
    console.log('err.message:>>', err);
    throw new AppError('error creating salesman');
  }
});

salesmanRouter.put('/:id',async (request, response) => {
  try{
    const {id} = request.params;
    const { personId } = request.body;
    const salesman = await getRep().findOne(id);
    salesman.person = personId;
    const salesmanUpdated = await getRep().save(salesman)
    return response.status(201).json(salesmanUpdated);
  }catch(err){
    console.log('err.message:>>', err);
    throw new AppError('error updating salesman');
  }
});

salesmanRouter.delete('/:id',async (request, response) => {
    try{
      const { id } = request.params;
      const demand = await getRep().delete(id);
      return response.status(200).json( { message: "deleteded"});
    }catch(err){
      console.log('err.message:>>', err);
      throw new AppError('error get demand ');
    }
});

export default salesmanRouter;
