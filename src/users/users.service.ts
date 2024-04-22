import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: string): Promise<User> {
        return this.usersRepository.findOneBy({ id: Number(id) });
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async create(user: User): Promise<User> {
        return this.usersRepository.save(user);
    }

    async update(id: string, user: Partial<User>): Promise<User> {
        const existingUser = await this.usersRepository.findOneBy({ id: Number(id) });
        if (existingUser) {
            const updated = Object.assign(existingUser, user);
            return this.usersRepository.save(updated);
        }
        return null;
    }
}
