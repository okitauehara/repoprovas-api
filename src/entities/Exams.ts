import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import Categories from './Categories';
import Names from './Names';
import Subjects from './Subjects';
import Professors from './Professors';

@Entity('exams')
export default class Exams {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name_id: number;

  @Column()
    category_id: number;

  @Column()
    professor_id: number;

  @Column()
    subject_id: number;

  @Column()
    url: string;

  @ManyToOne(() => Names, (name) => name.id)
  @JoinColumn({ name: 'name_id' })
    name: Names;

  @ManyToOne(() => Categories, (category) => category.id)
  @JoinColumn({ name: 'category_id' })
    category: Categories;

  @ManyToOne(() => Subjects, (subject) => subject.id)
  @JoinColumn({ name: 'subject_id' })
    subject: Subjects;

  @ManyToOne(() => Professors, (professor) => professor.id)
  @JoinColumn({ name: 'professor_id' })
    professor: Professors;
}
