import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import Exams from './Exams';

@Entity('names')
export default class Names {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @OneToMany(() => Exams, (exam) => exam.name)
    exam: Exams;
}
