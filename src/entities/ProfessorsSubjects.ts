import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('professors_subjects')
export default class ProfessorsSubjects {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    professor_id: number;

  @Column()
    subject_id: number;
}
