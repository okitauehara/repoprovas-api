import {
  Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn,
} from 'typeorm';
import Subjects from './Subjects';

@Entity('professors')
export default class Professors {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    professor: string;

  @OneToOne(() => Subjects, { eager: true })
  @JoinColumn({ name: 'subject_id' })
    subject: Subjects;
}
