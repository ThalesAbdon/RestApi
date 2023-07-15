export interface IUsecase<I, T> {
  execute: (...data: I[]) => Promise<T>;
}
