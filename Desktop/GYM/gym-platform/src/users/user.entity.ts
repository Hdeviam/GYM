import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;  // Utiliza `!` para indicar que este valor será asignado por TypeORM.

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;
}
