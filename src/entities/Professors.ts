import {
  Entity, PrimaryGeneratedColumn, Column,
} from 'typeorm';

@Entity('professors')
export default class Professors {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    professor: string;
}
