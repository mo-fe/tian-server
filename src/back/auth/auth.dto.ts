import { IsNotEmpty, IsEmail } from 'class-validator';
import { User } from '../../db/entity/user.entity';
import { Field, InputType } from 'type-graphql';

@InputType({ description: 'SignIn data' })
export class LoginUserInput implements Partial<User> {
  @Field({ description: '用户名' })
  @IsNotEmpty({ message: '用户名不能为空' })
  public username: string;

  @Field({ description: '密码' })
  @IsNotEmpty({ message: '密码不能为空' })
  public password: string;
}

@InputType({ description: 'SignUp data' })
export class registerUserInfo extends LoginUserInput implements Partial<User> {
  
}