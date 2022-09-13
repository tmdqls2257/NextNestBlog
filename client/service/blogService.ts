import NetworkService, { MethodType } from "../network/http";

class BlogNetworkService {
  constructor() {}
  async post(title: string, contents: string) {
    const response = await NetworkService.request("blogs", MethodType.post, {
      title,
      contents,
    });
    return response;
  }

  async getAllBlogs() {
    const response = await NetworkService.request("blogs", MethodType.get);
    return response;
  }

  async getBlog(ID: string) {
    const response = await NetworkService.request(
      `blogs/${ID}`,
      MethodType.get,
      {}
    );

    return response;
  }

  async imgUpload(formData: FormData): Promise<string> {
    const response = await NetworkService.request(
      "blogs/upload",
      MethodType.post,
      formData
    );

    return response.image;
  }

  async deleteBlog(ID: string) {
    const response = await NetworkService.request(
      `blogs/${ID}`,
      MethodType.delete
    );

    return response;
  }
}

const BlogService = new BlogNetworkService();

export default BlogService;
