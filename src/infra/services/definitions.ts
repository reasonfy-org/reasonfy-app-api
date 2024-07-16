export interface IService<Dto extends { request: any; response: any }> {
  invokeAsync(request: Dto['request']): Promise<Dto['response']>;
}
