export interface RegisterInputDto {
  first_name: string;
  last_name: string;
  email: string;
}

export class RegisterOutputDto {
  name: string;
}
