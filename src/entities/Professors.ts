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

  @OneToOne(() => Subjects)
  @JoinColumn({ name: 'subject_id' })
    subject: Subjects;
}
