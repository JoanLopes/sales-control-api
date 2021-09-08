import { Router } from 'express';
import lotRouter from '../routes/lot.routes';
import productRouter from '../routes/product.routes';
import personRouter from '../routes/person.routes';
import salesmanRouter from '../routes/salesman.routes';
import demandRouter from '../routes/demand.routes';
import userRouter from '../routes/user.routes';
import sessionRouter from '../routes/sessions.routes';

const routes = Router();

routes.get('/', (request, response) => response.json({ message: 'ola' }));

routes.use('/lot',lotRouter);
routes.use('/product',productRouter);
routes.use('/person',personRouter);
routes.use('/salesman',salesmanRouter);
routes.use('/demand',demandRouter);
routes.use('/user',userRouter);
routes.use('/session',sessionRouter);
export default routes;
