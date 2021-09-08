import 'reflect-metadata';
import express,{ Request,Response,NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes/index';
import AppError from './errors/AppError';
import ensureAuthenticated from './middlewares/ensureAuthenticated';
import './database/index';

const app = express();
app.use(express.json());
app.use(routes);
app.use(ensureAuthenticated)

app.use(
    (error:Error,request:Request, response:Response, next:NextFunction) => {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message
            })
        }
        console.error(error.message);
        return response.status(500).json({
            status: 'error',
            message: 'internal server error',
        })
    }
);




app.listen(2222, () => {
  console.log('listening on http://localhost:2222');
});
