import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export const AppController = (route: string) => {
  const routeResolution = `/api/v1/vivawatch/${route}`;
  return applyDecorators(Controller(routeResolution), ApiTags(routeResolution));
};
