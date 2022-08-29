import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { BlogModule } from './blog/blog.module';
import { ProfileModule } from './profile/profile.module';
import { BlogsModule } from './profiles/blogs/blogs.module';
import { BlogsModule } from './blogs/blogs.module';
import { ProfilesModule } from './profiles/profiles.module';
import { VisitorsModule } from './visitors/visitors.module';
import { TagsModule } from './tags/tags.module';

const TypeOrmModuleOptions = {
  useFactory: async (configService: ConfigService) => ({
    namingStrategy: new SnakeNamingStrategy(),
    type: 'postgres',
    host: configService.get('DB_HOST'), // process.env.DB_HOST
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    entities: [UserEntity],
    synchronize: true, //! set 'false' in production
    autoLoadEntities: true,
    logging: true,
    keepConnectionAlive: true,
  }),
};

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        // joi를 사용하면 환경변수의 유효성 검사를 할 수 있습니다.
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'rpovision')
          .default('development'),
        PORT: Joi.number().default(8080),
        SECRET_KEY: Joi.string().required(),
        ADMIN_USER: Joi.string().required(),
        ADMIN_PASSWORD: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({}),
    BlogModule,
    ProfileModule,
    BlogsModule,
    ProfilesModule,
    VisitorsModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
