export interface LoginInputDto {
  username: string;
  password: string;
}

export interface LoginOutputDto {
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
}
