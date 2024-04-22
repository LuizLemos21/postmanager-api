// src/posts/post.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('post')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: true })
    conteudo: string;

    @Column({ type: 'datetime', nullable: true })
    dataAgendamento: Date;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;
}