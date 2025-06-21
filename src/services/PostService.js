import { Post } from "@/models/Post.js"
import { api, sandBox } from "./AxiosService.js"
import { AppState } from "@/AppState.js"

class PostService {
  async makePost(postData) {
    const res = await sandBox.post('api/posts', postData)
    const post = new Post(res.data)
    AppState.posts.push(post)
  }

}
export const postService = new PostService()