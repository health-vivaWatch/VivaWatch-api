import { describe, expect, it } from 'vitest';
import { ApiTokenMiddleware } from '../../../src/comons/middlewares/api-token/api-token.middleware';

describe('ApiTokenMiddleware', () => {
  it('should be defined', () => {
    expect(new ApiTokenMiddleware()).toBeDefined();
  });
});
