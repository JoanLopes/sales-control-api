import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import Product from './Product'


@Entity("lot")
export default class Lot {

  @PrimaryGeneratedColumn({type : "integer", name: "code_id"})
  codeId: number;

  @Column({ type : "date",  name: "manufacturing_date", nullable: false })
  manufacturingDate: Date;
  
  @Column({ type : "int",name: "amount", nullable: false })
  amount: number;

  @OneToMany(() => Product, product => product.lot)
  product: Product[];
}