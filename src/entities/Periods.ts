import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('periods')
export default class Periods {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    period: string;
}
