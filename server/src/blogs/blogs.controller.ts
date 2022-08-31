import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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
  async getBlog(@Param('id') id: string) {
    return await this.blogsService.getBlog(id);
  }

  @Post()
  async blogPost(@Body() body: BlogDTO) {
    return await this.blogsService.blogPost(body);
  }

  @Patch(':id')
  async updateBlog(@Param('id') id: string, @Body() body: BlogDTO) {
    return await this.blogsService.updateBlog(id, body);
  }
}
