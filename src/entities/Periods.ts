import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import Subjects from './Subjects';

@Entity('periods')
export default class Periods {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    period: string;

  @OneToMany(() => Subjects, (subject) => subject.period)
    subjects: Subjects;
}
