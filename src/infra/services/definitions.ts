export interface IService<Request, Response> {
  invokeAsync(request: Request): Promise<Response>;
}
