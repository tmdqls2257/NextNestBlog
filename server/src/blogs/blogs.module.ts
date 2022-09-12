import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from '../tags/tags.entity';
import { VisitorEntity } from '../visitors/visitors.entity';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { BlogEntity } from 'src/blogs/blogs.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  //https://junior-datalist.tistory.com/147
  imports: [
    MulterModule.register({
      dest: './upload',
    }),
    TypeOrmModule.forFeature([BlogEntity, TagEntity, VisitorEntity]),
  ],
  controllers: [BlogsController],
  providers: [BlogsService],
  exports: [BlogsService],
})
export class BlogsModule {}
