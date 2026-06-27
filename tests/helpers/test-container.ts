import {
  PostgreSqlContainer,
  StartedPostgreSqlContainer,
} from '@testcontainers/postgresql';
import { RedisContainer, StartedRedisContainer } from '@testcontainers/redis';

let postgresContainer: StartedPostgreSqlContainer;
let redisContainer: StartedRedisContainer;

export async function startContainers() {
  postgresContainer = await new PostgreSqlContainer('postgres:16-alpine')
    .withDatabase('vivawatch')
    .withUsername('vivawatch')
    .withPassword('vivawatch')
    .start();

  redisContainer = await new RedisContainer('redis:7-alpine').start();

  return {
    postgresUrl: postgresContainer.getConnectionUri(),
    redisHost: redisContainer.getHost(),
    redisPort: redisContainer.getPort(),
  };
}

export async function stopContainers() {
  await postgresContainer?.stop();
  await redisContainer?.stop();
}
