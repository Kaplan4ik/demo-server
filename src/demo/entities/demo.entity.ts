import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('demo')
export class DemoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  random_number: string;
}
