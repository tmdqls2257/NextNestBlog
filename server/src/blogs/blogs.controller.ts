import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogDTO } from './dto/blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get()
  async getAllBlog() {
    return await this.blogsService.getAllBlogs();
  }
  //   getBlog(@CurrentBlog()){}
  @Get(':id')
  getBlog() {
    return this.blogsService.getBlog();
  }

  @Post()
  async blogPost(@Body() body: BlogDTO) {
    return await this.blogsService.blogPost(body);
  }
}
