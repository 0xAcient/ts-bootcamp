type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export function isWriteMethod(method: HttpMethod): boolean {
  switch (method) {
    case 'GET':
      return false;
    case 'PUT':
      return true;
    case 'POST':
      return true;
    case 'DELETE':
      return true;
  }
}
