import NetworkService, { MethodType } from "../network/http";

class BlogNetworkService {
  constructor() {}
  async post(title: string, content: string) {
    const response = await NetworkService.request("blogs", MethodType.post, {
      title,
      content,
    });
    return response;
  }

  async getAllBlogs() {
    const response = await NetworkService.request("blogs", MethodType.get);
    return response;
  }

  async getBlog(ID: string) {
    const response = await NetworkService.request(
      "blogs",
      MethodType.get,
      {},
      {
        ID,
      }
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
}

const BlogService = new BlogNetworkService();

export default BlogService;
