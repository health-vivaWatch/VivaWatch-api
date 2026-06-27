import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

// this controller needs to have verification for only sys admins manage the system plans
export const SysController = (route: string) => {
  return applyDecorators(
    Controller(`api/v1/vivaWatch/system/${route}`),
    ApiTags(`api/v1/vivaWatch/system/${route}`),
  );
};
