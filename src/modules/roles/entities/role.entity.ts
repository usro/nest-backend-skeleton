import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
@ObjectType()
export class Role {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Id' })
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  slug: string;
}
