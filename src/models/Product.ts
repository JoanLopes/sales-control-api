import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import Demand from './Demand';
import Lot from './Lot';

@Entity("product")
export default class Product {

  @PrimaryGeneratedColumn({ type: "int", name: "code_id"})
  codeId: string;

  @Column({ type : "varchar",  name: "name", nullable: false })
  name: string;

  @Column({ type : "varchar", name: "color", nullable: false })
  color: number;

  @Column({ type : "varchar", name: "description", nullable: true })
  description: number;

  @Column({ type : "int", name: "value", nullable: true })
  value: number;

  @OneToMany(() => Demand, Demand => Demand.product)
  demand: Demand[];

  @ManyToOne(() => Lot , lot => lot.product)
  @Index({ unique: false })
  @JoinColumn({name:"lot_id"})
  lot: Lot;
}
