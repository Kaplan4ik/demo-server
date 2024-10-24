import { Controller, Get } from '@nestjs/common';
import { DemoEntity } from './entities/demo.entity';
import { DemoService } from './demo.service';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Get()
  getHello(): Promise<DemoEntity[]> {
    return this.demoService.getHello();
  }
}
