import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import Demand from './Demand';
import Person from './Person'

@Entity("salesman")
export default class Salesman {

  @PrimaryGeneratedColumn({ type: "int", name: "code_id"})
  codeId: number;

  @OneToOne(() => Person)
  @JoinColumn({name: "person_id"})
  person: Person;

  @OneToMany(() => Demand, demand => demand.salesman)
  demand: Demand[];
}
