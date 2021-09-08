import Demand from '../models/Demand';
import Person from '../models/Person';
import Salesman from '../models/Salesman';
import lot from '../models/Lot'
import Product from '../models/Product'
import { ConnectionOptions, createConnection } from 'typeorm';
import User from '../models/User';


const options: ConnectionOptions = {
  type: "sqlite",
  database: './db.sqlite3',
  entities: [ lot , Product, Person, Salesman, Demand, User ],
  logging: true
}
createConnection(options);
