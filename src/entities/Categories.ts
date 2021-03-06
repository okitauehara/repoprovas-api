import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import Exams from './Exams';

@Entity('categories')
export default class Categories {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    category: string;

  @OneToMany(() => Exams, (exam) => exam.category)
    exam: Exams;
}
