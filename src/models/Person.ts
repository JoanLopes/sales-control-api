import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import Demand from './Demand';

@Entity("person")
export default class Person {

  @PrimaryGeneratedColumn({ type: "int", name: "cpf"})
  cpf: number;

  @Column({ type : "varchar",  name: "name", nullable: false })
  name: string;

  @Column({ type : "date",  name: "birth_date", nullable: false })
  birthDate: Date;

  @OneToMany(() => Demand, demand => demand.person)
  demand: Demand[];
}
