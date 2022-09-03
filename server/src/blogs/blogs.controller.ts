import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { BlogsService } from './blogs.service';
import { BlogDTO } from './dto/blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @ApiOperation({ summary: '모든 블로그 가져오기' })
  @Get()
  async getAllBlog() {
    return await this.blogsService.getAllBlogs();
  }
  //   getBlog(@CurrentBlog()){}
  @ApiOperation({ summary: '특정 블로그 불러오기' })
  @Get(':id')
  async getBlog(@Param('id') id: string) {
    return await this.blogsService.getBlog(id);
  }

  @ApiOperation({ summary: '블로그 글쓰기' })
  @Post()
  async blogPost(@Body() body: BlogDTO) {
    return await this.blogsService.blogPost(body);
  }

  @ApiOperation({ summary: '특정 블로그 수정' })
  @Patch(':id')
  async updateBlog(@Param('id') id: string, @Body() body: BlogDTO) {
    return await this.blogsService.updateBlog(id, body);
  }

  @ApiOperation({ summary: '특정 블로그 제거' })
  @Delete(':id')
  async deleteBlog(@Param('id') id: string) {
    return await this.blogsService.deleteBlog(id);
  }
}
