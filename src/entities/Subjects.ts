import {
  Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, JoinTable, OneToMany,
} from 'typeorm';
import Exams from './Exams';
import Periods from './Periods';
import Professors from './Professors';

@Entity('subjects')
export default class Subjects {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    subject: string;

  @OneToOne(() => Periods)
    period: Periods;

  @ManyToMany(() => Professors, (professor) => professor.id, { eager: true })
  @JoinTable({
    name: 'professors_subjects',
    joinColumn: {
      name: 'subject_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'professor_id',
      referencedColumnName: 'id',
    },
  })
    professors: Professors[];

  @OneToMany(() => Exams, (exam) => exam.subject)
    exam: Exams;
}
