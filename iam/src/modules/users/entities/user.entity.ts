import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../roles/entities/role.entity.js';

export enum UserStatus {
  REGISTERD = 'registerd',
  PENDING = 'pending',
  ONLINE = 'online',
  OFFLINE = 'offline',
  BUSY = 'busy',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column()
  @Generated('increment')
  hrId: number;

  @Column('varchar')
  passwordHash: string;

  @Column({
    type: 'enum',
    enum: UserStatus,
    enumName: 'user_status',
    default: UserStatus.PENDING,
  })
  status: UserStatus;

  @Column('number')
  maxConcurrentChats: number;

  @ManyToOne(() => Role, { onDelete: 'RESTRICT', nullable: false })
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @Column('text', { array: true, default: [] })
  apps: string[];

  @Column('text')
  imageUrl: string;
}


