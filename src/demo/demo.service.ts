import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DemoEntity } from './entities/demo.entity';

@Injectable()
export class DemoService {
  constructor(
    @InjectRepository(DemoEntity)
    private readonly demoRepository: Repository<DemoEntity>,
  ) {}

  async getHello(): Promise<DemoEntity[]> {
    const randomNumber = Math.floor(Math.random() * 1000);
    await this.demoRepository.save({ random_number: randomNumber.toString() });

    return await this.demoRepository.find();
  }
}
