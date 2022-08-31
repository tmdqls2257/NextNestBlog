import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from 'src/blogs/blogs.entity';
import { Repository } from 'typeorm';
import { BlogDTO } from './dto/blog.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogEntity)
    private readonly BlogEntityRepository: Repository<BlogEntity>,
  ) {}
  async getAllBlogs() {
    try {
      const comments = await this.BlogEntityRepository.find();
      return comments;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  getBlog() {
    return 'get blog';
  }

  async blogPost(BlogEntity: BlogDTO) {
    const { title, contents, description } = BlogEntity;

    const newBlog = await this.BlogEntityRepository.save({
      title,
      contents,
      description,
    });
    return newBlog;
  }
}
