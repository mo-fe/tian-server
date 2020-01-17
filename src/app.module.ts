import { Module } from '@nestjs/common';
import { UserModule } from './back/user/user.module';
import { BootstrapModule } from './bootstrap';
import { AuthModule } from './back/auth/auth.module';

@Module({
  imports: [
    BootstrapModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
