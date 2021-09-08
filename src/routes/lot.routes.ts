import { Router } from 'express';
import Lot from './../models/Lot';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

const lotRouter= Router();
lotRouter.use(ensureAuthenticated);

function getRep(){
  const lotRepository = getRepository(Lot);
  return lotRepository;
}

lotRouter.get('/',async (request, response) => {
  try{
    const lot = await getRep().find();
    return response.status(200).json(lot);
  }catch(err){
    console.log('err.message:>>', err);
    throw new AppError('message:"error get Lot ');
  }
})

lotRouter.get('/:id',async (request, response) => {
    try{
      const {id} = request.params;
      const lot = await getRep().findOne(id);
      return response.status(200).json(lot);
    }catch(err){
      console.log('err.message:>>', err);
      throw new AppError('error get Lot');
    }
  })

lotRouter.post('/',async (request, response) => {
  try{
    const { codeId , manufacturingDate, amount } = request.body;
    const lot = await getRep().save({codeId, manufacturingDate, amount});
    return response.status(201).json(lot);
  }catch(err){
    console.log('err.message:>>', err);
    throw new AppError('error creating Lot');
  }
})

lotRouter.put('/:id',async (request, response) => {
  try{
    const {id} = request.params;
    const { manufacturingDate, amount } = request.body;
    const lot = await getRep().findOne(id);
    lot.manufacturingDate = manufacturingDate;
    lot.amount = amount;
    const lotUpdated = await getRep().save(lot)
    return response.status(201).json(lotUpdated);
  }catch(err){
    console.log('err.message:>>', err);
    throw new AppError('error updating Lot');
  }
})

export default lotRouter;
