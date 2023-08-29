declare global {
  type ApiResponse<T> = {
    code: number;
    more_info: string;
    message: string;
    data: T;
  };
}
export {};
