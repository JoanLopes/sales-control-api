import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import Salesman from './Salesman';

@Entity("user")
export default class User {

  @PrimaryGeneratedColumn({ type: "int", name: "id"})
  id: number;

  @Column({ type : "varchar",  name: "name", nullable: false })
  name: string;

  @Column({ type : "varchar",  name: "email", nullable: false })
  email: string;

  @Column({ type : "varchar",  name: "password", nullable: false })
  password: string;

  @OneToOne(() => Salesman)
  @JoinColumn({name: "salesman_id"})
  salesman: Salesman;
}
