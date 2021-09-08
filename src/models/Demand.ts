import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import Person from './Person'
import Product from './Product';
import Salesman from './Salesman';

@Entity("demand")
export default class Demand {

  @PrimaryGeneratedColumn({ type: "int", name: "code_id"})
  codeId: number;

  @ManyToOne(() => Person, person => person.demand)
  @Index({ unique: false })
  @JoinColumn({name: "person_id"})
  person: Person;

  @ManyToOne(() => Salesman, salesman => salesman.demand)
  @Index({ unique: false })
  @JoinColumn({name: "salesman_id"})
  salesman: Salesman;

  @ManyToOne(() => Product, product => product.demand)
  @Index({ unique: false })
  @JoinColumn({name: "product_id"})
  product: Product;

  @Column({ type : "int", name: "value", nullable: true })
  value: number;

  @CreateDateColumn({name:'created_at'})
  createdAt: Date;

  @CreateDateColumn({name:'update_at'})
  updatedAt: Date;

}
