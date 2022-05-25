import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(@InjectRepository(Role) private roleRepository: Repository<Role>) { }

  create(createRoleInput: CreateRoleInput) {
    const role = this.roleRepository.create(createRoleInput);
    return this.roleRepository.save(role);
  }

  findAll() {
    return this.roleRepository.find();
  }

  findOne(id: number) {
    return this.roleRepository.findOneOrFail({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateRoleInput: UpdateRoleInput) {
    await this.roleRepository.update({ id: id }, updateRoleInput)
    return this.roleRepository.findOneOrFail({ where: { id: id } })
  }

  async remove(id: number) {
    const role = await this.roleRepository.findOneOrFail({ where: { id: id } })
    await this.roleRepository.delete({ id: id })
    return role
  }
}
