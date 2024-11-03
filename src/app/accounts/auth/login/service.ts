import { Injectable } from '@nestjs/common';
import { IService } from 'src/infra/services';
import { LoginInputDto, LoginOutputDto } from './dto';

@Injectable()
export class LoginService implements IService<LoginInputDto, LoginOutputDto> {
  constructor() {}

  async invokeAsync({}: LoginInputDto): Promise<LoginOutputDto> {
    return null;
  }
}
