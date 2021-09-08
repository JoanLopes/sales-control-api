import { Router } from 'express';
import Demand from './../models/Demand';
import { getRepository, getConnection } from 'typeorm';
import AppError from '../errors/AppError';

const demandRouter= Router();

function getRep(){
  const demandRepository = getRepository(Demand);
  return demandRepository;
}

demandRouter.get('/byvalue/:page',async (request, response) => {
  try{

    const { page } = request.params;
    let pageAux = parseInt(page)
    pageAux*=4;

    const demand = await getRep()
    .createQueryBuilder("demand")
    .orderBy("demand.value", "ASC")
    .innerJoinAndSelect("demand.person", "person")
    .leftJoinAndSelect("demand.product", "product")
    .leftJoinAndSelect("demand.salesman", "salesman")
    .skip(pageAux)
    .take(4)
    .getMany();

    return response.status(200).json(demand);
  }catch(err){
    throw new AppError('error get demand');
  }
})

demandRouter.get('/bydate/:page',async (request, response) => {


      const { page } = request.params;
      let pageAux = parseInt(page)
      pageAux*=4;

      const demand = await getRep()
      .createQueryBuilder("demand")
      .orderBy("demand.created_at", "ASC")
      .innerJoinAndSelect("demand.person", "person")
      .leftJoinAndSelect("demand.product", "product")
      .leftJoinAndSelect("demand.salesman", "salesman")
      .skip(pageAux)
      .take(4)
      .getMany();
      console.log(demand);
try{
      return response.status(200).json(demand);
    }catch(err){
      throw new AppError('error get demand');
    }
  })

demandRouter.post('/',async (request, response) => {
  try{
    const { codeId, personId, salesmanId, productId, value } = request.body;
    const demand = await getRep().save({ codeId, person:personId, salesman:salesmanId, product:productId, value });
    return response.status(201).json(demand);
  }catch(err){
    throw new AppError('error creating demand');
  }
})

demandRouter.put('/:id',async (request, response) => {
  try{
    const {id} = request.params;
    const {  personId, salesmanId, productId, value } = request.body;
    const demand = await getRep().findOne(id);
    demand.person = personId;
    demand.salesman= salesmanId;
    demand.product=productId;
    demand.value=value;
    const demandUpdated = await getRep().save(demand)
    return response.status(201).json(demandUpdated);
  }catch(err){
      throw new AppError('error updating demand');
  }
})

demandRouter.delete('/:id',async (request, response) => {
    try{
      const { id } = request.params;
      const demand = await getRep().delete(id);
      return response.status(200).json( { message: "deleteded"});
    }catch(err){
        throw new AppError('error get demand ');
    }
  })

export default demandRouter;
