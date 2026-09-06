/** Catch values can be Errors, rejected strings, or arbitrary HTTP interceptor output. */
export function errorMessage(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
}

export function httpStatus(error: unknown): number | undefined {
    if (typeof error !== 'object' || error === null || !('response' in error)) return undefined;
    const response = error.response;
    if (typeof response !== 'object' || response === null || !('statusCode' in response)) return undefined;
    return typeof response.statusCode === 'number' ? response.statusCode : undefined;
}
