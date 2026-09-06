import { expect, it } from 'vitest';
import { errorMessage, httpStatus } from '../../resources/saola/web/app/services/Errors';

it('handles unknown rejections without masking the original error', () => {
    expect(errorMessage(new Error('Invalid email'))).toBe('Invalid email');
    expect(errorMessage('offline')).toBe('offline');
    expect(errorMessage(null)).toBe('null');
    for (const value of [null, undefined, 'offline', {}, {response: null}, {response: {statusCode: '422'}}]) {
        expect(httpStatus(value)).toBeUndefined();
    }
    expect(httpStatus(Object.assign(new Error('Conflict'), {response: {statusCode: 409}}))).toBe(409);
});
