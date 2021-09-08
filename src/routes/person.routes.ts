import { Router } from 'express';
import Person from './../models/Person';
import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import AppError from '../errors/AppError';

const personRouter= Router();
personRouter.use(ensureAuthenticated);

function getRep(){
  const personRepository = getRepository(Person);
  return personRepository;
}

personRouter.get('/',async (request, response) => {
  try{
    const person = await getRep().find();
    return response.status(200).json(person);
  }catch(err){
    console.log('err.message:>>', err);
    throw new AppError(' message:"error get Person ');
  }
})

personRouter.post('/',async (request, response) => {
  try{
    const { cpf, name, birthDate } = request.body;
    const person = await getRep().save({ cpf, name, birthDate });
    return response.status(201).json(person);
  }catch(err){
    console.log('err.message:>>', err);
    throw new AppError('error creating Person ');
  }
})

personRouter.put('/:id',async (request, response) => {
  try{
    const {id} = request.params;
    const { name, birthDate } = request.body;
    const person = await getRep().findOne(id);
    person.name = name;
    person.birthDate = birthDate;
    const personUpdated = await getRep().save(person)
    return response.status(201).json(personUpdated);
  }catch(err){
    console.log('err.message:>>', err);
    throw new AppError('error updating Person ');
  }
});

personRouter.delete('/:id',async (request, response) => {
    try{
      const { id } = request.params;
      const person = await getRep().delete(id);
      return response.status(200).json( { message: "deleteded"});
    }catch(err){
      console.log('err.message:>>', err);
      throw new AppError('error get person ');
    }
});

export default personRouter;
