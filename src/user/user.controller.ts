import { Controller, Post, Body } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private service: UserService) { }

  @Post()
    create(@Body() user: User) {
        return this.service.registerUser(user);
    }
}
