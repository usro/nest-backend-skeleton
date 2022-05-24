import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  create(createUserInput: CreateUserInput) {
    const user = this.userRepository.create(createUserInput);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneOrFail({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    await this.userRepository.update({ id: id }, updateUserInput)
    return this.userRepository.findOneOrFail({ where: { id: id } })
  }

  async remove(id: number) {
    const user = await this.userRepository.findOneOrFail({ where: { id: id } })
    await this.userRepository.delete({ id: id })
    return user
  }
}
