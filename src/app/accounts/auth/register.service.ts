import { Injectable } from '@nestjs/common';
import { IService } from 'src/infra/services';

type Register = {
  request: {
    first_name: string;
    last_name: string;
    email: string;
  };

  response: {};
};

@Injectable()
export class RegisterService implements IService<Register> {
  constructor() {}

  async invokeAsync(
    request: Register['request'],
  ): Promise<Register['response']> {
    return {};
  }
}
