import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from '../tags/tags.entity';
import { VisitorEntity } from '../visitors/visitors.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity, VisitorEntity])],
})
export class BlogsModule {}
