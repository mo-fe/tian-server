import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BootstrapModule } from './bootstrap';

@Module({
  imports: [
    BootstrapModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
