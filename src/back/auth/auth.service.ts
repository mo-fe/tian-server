import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../db/entity/user.entity';
import { LoginUserInput, registerUserInfo } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * 登录
   * @param {LoginUserInput} loginInfo 登录信息
   * @param {string} ip 访问Ip
   */
  async login(loginInfo: LoginUserInput, ip: string): Promise<any> {
    const { username, password } = loginInfo;
    const user = await this.userRepository.findOne({
      where: { username, password },
    });
    if (!user) {
      throw new UnauthorizedException('用户名或者密码不正确');
    }
    user.lastLoginIp = ip;
    user.lastLoginTime = new Date();
    await this.userRepository.save(user);
    const payload = { username: user.username, userId: user.userId };
    const token = this.jwtService.sign(payload);
    return {
      token,
      userInfo: {
        userId: user.userId,
        username: user.username,
      },
    };
  }

  /**
   * 登录
   * @param {LoginUserInput} loginInfo 登录信息
   * @param {string} ip 访问Ip
   */
  async register(registerInfo: LoginUserInput, ip: string): Promise<any> {
    const { username, password } = registerInfo;
    const user = await this.userRepository.findOne({
      where: { username },
    });
    if (user) {
      throw new BadRequestException('用户名已经存在!');
    }
    const data: User = new User();
    const curTime = new Date();
    data.username = username;
    data.password = password;
    data.lastLoginTime = curTime;
    data.createdTime = curTime;
    data.lastLoginIp = ip;
    const dbUser = await this.userRepository.save(data);
    const payload = { username: dbUser.username, userId: dbUser.userId };
    const token = this.jwtService.sign(payload);
    return {
      token,
      userInfo: {
        userId: dbUser.userId,
        username: dbUser.username,
      },
    };
  }
}
