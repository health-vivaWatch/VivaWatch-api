import { BullModule } from '@nestjs/bullmq';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiTokenMiddleware } from './comons/middlewares/api-token/api-token.middleware';
import { DatabaseModule } from './modules/database/database.module';
import { RedisModule } from './modules/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
        }),
      ],
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        throttlers: [
          {
            ttl: config.get('THROTTLE_TTL', 60),
            limit: config.get('THROTTLE_LIMIT', 10),
          },
        ],
      }),
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        connection: {
          host: config.get('BULLMQ_REDIS_HOST', 'localhost'),
          port: config.get('BULLMQ_REDIS_PORT', 6379),
        },
      }),
    }),
    DatabaseModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule implements NestModule, OnModuleInit {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiTokenMiddleware);
  }

  onModuleInit() {
    console.log(`
  __      _____        __          __          _       _
  \\ \\    / /\\ \\      / /__ _ _ __| |__   __ _| |_ ___| |__
   \\ \\/\\/ /  \\ \\ /\\ / / _ \\ '__| '_ \\ / _\` | __/ __| '_ \\
    \\  _  /    \\ V  V /  __/ |  | | | | (_| | || (__| | | |
     \\/ \\/      \\_/\\_/ \\___|_|  |_| |_|\\__,_|\\__\\___|_| |_|
    `);
    console.log(`🚀 Servidor inicializado em ${new Date().toISOString()}`);
    console.log(`🔧 Ambiente: ${process.env.NODE_ENV ?? 'development'}`);
    console.log(`📍 Porta: ${process.env.PORT ?? 3000}`);
  }
}
