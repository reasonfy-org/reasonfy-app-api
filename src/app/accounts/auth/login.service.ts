import { Injectable } from '@nestjs/common';
import { IService } from 'src/infra/services';

type LoginServiceDto = {
  request: {
    username: string;
    password: string;
  };

  response: {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    token_type: string;
    scope: string;
    user: {
      id: string;
      name: string;
      email: string;
      roles: string[];
    };
  };
};

@Injectable()
export class LoginService implements IService<LoginServiceDto> {
  constructor() {}

  async invokeAsync(
    request: LoginServiceDto['request'],
  ): Promise<LoginServiceDto['response']> {
    return null;
  }
}
