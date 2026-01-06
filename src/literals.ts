type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export function isWriteMethod(method: HttpMethod): boolean {
    if (method === "GET") {
        return false;
    }

    return true;
}
