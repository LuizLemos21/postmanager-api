// src/users/user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    nome: string;

    @Column({ type: 'text' })
    email: string;

    @Column({ type: 'text' })
    senha: string;
}
