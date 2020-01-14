import * as path from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from 'nestjs-config';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
    imports: [
      ConfigModule.load(path.resolve(__dirname, '..', 'config', '**/!(*.d).{ts,js}'), { debug: true }),
      TypeOrmModule.forRootAsync({
        useFactory: (config: ConfigService) => {
          return config.get('database');
        },
        inject: [ConfigService],
    }),
    ],
})
export class BootstrapModule {}
