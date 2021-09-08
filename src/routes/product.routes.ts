import { Router } from 'express';
import Product from './../models/Product';
import { getRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import AppError from '../errors/AppError';

const productRouter= Router();
productRouter.use(ensureAuthenticated);

function getRep(){
  const productRepository = getRepository(Product);
  return productRepository;
}

productRouter.get('/',async (request, response) => {
  try{
    const product = await getRep().find({ relations: ['lot'] });
    return response.status(200).json(product);
  }catch(err){
    console.log('err.message:>>', err);

    throw new AppError('error get Person ');
  }
});

productRouter.get('/:id',async (request, response) => {
    try{
      const { id } = request.params;
      const product = await getRep().findOne( { where: {codeId: id}, relations: ['lot'],});

      return response.status(200).json(product);
    }catch(err){
      console.log('err.message:>>', err);
      throw new AppError('error get product');
    }
});

productRouter.post('/',async (request, response) => {
  try{
    const { codeId, name, color, description, value, lotId } = request.body;
    const product = await getRep().save({codeId, name, color, description, value, lot:lotId});
    return response.status(201).json(product);
  }catch(err){
    console.log('err.message:>>', err);

    throw new AppError('error creating Product ');

  }
})

productRouter.put('/:id',async (request, response) => {
  try{
    const {id} = request.params;
    const { name, color, description, value, lotId } = request.body;
    const product = await getRep().findOne(id);
    product.name = name;
    product.color = color;
    product.description= description;
    product.value= value;
    product.lot= lotId;
    const productUpdated = await getRep().save(product)
    return response.status(201).json(productUpdated);
  }catch(err){
    console.log('err.message:>>', err);
    throw new AppError('error updating Product');
  }
});

productRouter.delete('/:id',async (request, response) => {
    try{
      const { id } = request.params;
      const product = await getRep().delete(id);
      return response.status(200).json( { message: "deleteded"});
    }catch(err){
      console.log('err.message:>>', err);
      throw new AppError('error get product ');
    }
});

export default productRouter;
