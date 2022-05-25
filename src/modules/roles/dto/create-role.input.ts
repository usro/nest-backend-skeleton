import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateRoleInput {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  slug: string;

}
