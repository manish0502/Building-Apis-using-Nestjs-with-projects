import { Expose } from 'class-transformer';

export class UserRulesDto {

  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  lastname: string;

  @Expose()
  email: string;
}
