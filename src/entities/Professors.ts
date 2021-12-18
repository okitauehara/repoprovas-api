import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import Exams from './Exams';

@Entity('professors')
export default class Professors {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    professor: string;

  @OneToMany(() => Exams, (exam) => exam.professor)
    exam: Exams;
}
