import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
export default class User {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    category: string;
}
