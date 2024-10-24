import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoEntity } from './entities/demo.entity';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';

@Module({
  imports: [TypeOrmModule.forFeature([DemoEntity])],
  controllers: [DemoController],
  providers: [DemoService],
})
export class DemoModule {}
