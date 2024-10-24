import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        port: configService.get<number>('DB_PORT'),
        entities: [__dirname + '/**/*.entity{.ts}'],
        // TODO: Remove after implementing migrations
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
        // TODO: Try to find better solution
        // ssl: {
        //   rejectUnauthorized: false,
        // },
      }),
    }),
    DemoModule,
  ],
})
export class AppModule {}
