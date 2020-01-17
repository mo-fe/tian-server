import { Controller, Post, Body, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserInput } from './auth.dto';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  /**
   * Creates an instance of AuthController.
   * @param {AuthService} authService
   * @memberof AuthController
   */
  constructor(private readonly authService: AuthService) {}

  /**
   * @description 登录
   * @param {LoginUserInput} data
   * @param {Request} req
   * @returns
   * @memberof AuthController
   */
  @Post('login')
  public async login(@Body() data: LoginUserInput, @Req() req: Request) {
    return await this.authService.login(data, req.ip);
  }

  /**
   * @description
   * @param {NewUserInput} data
   * @param {Request} req
   * @returns
   * @memberof AuthController
   */
  @Post('register')
  public async register(@Body() data: LoginUserInput, @Req() req: Request) {
    return await this.authService.register(data, req.ip);
  }
}
