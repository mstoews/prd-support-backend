import {
  HideField, ObjectType,
  registerEnumType
} from '@nestjs/graphql';
import { Model } from './model.model';

@ObjectType()
export class User extends Model {
  email: string;
  firstname?: string;
  lastname?: string;
  role: string;
  @HideField()
  password: string;
}
