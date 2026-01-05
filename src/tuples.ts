type ApiResponse<T> = [data: T | null, error: string | null];

export function makeSuccess<T>(data: T): ApiResponse<T> {
  return [data, null];
}

export function makeError<T>(message:string): ApiResponse<T> {
  return [null, message];
}

export function getData<T>(res: ApiResponse<T>): T | null {
  return res[0];
}


