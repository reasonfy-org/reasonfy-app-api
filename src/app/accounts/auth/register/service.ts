import { Injectable } from '@nestjs/common';
import { IService } from 'src/infra/services';
import { RegisterInputDto, RegisterOutputDto } from './dto';

@Injectable()
export class RegisterService
  implements IService<RegisterInputDto, RegisterOutputDto>
{
  constructor() {}

  async invokeAsync({}: RegisterInputDto): Promise<RegisterOutputDto> {
    return {
      name: 'John Doe',
    };
  }
}
