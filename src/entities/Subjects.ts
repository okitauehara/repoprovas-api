import {
  Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany, ManyToOne, JoinColumn,
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

  @Column()
    period_id: number;

  @ManyToOne(() => Periods, (period) => period.id)
  @JoinColumn({ name: 'period_id' })
    period: Periods;

  @ManyToMany(() => Professors, (professor) => professor.id)
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

  @OneToMany(() => Exams, (exam) => exam.subject, { eager: true })
    exams: Exams;
}
