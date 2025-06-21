import { AppState } from "@/AppState.js"
import { Post } from "@/models/Post.js"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"

class FeedService {
  async likePost(postId) {
    await api.post(`api/posts/${postId}/like`)
    await this.getAllPosts()
  }
  async deletePost(postId) {
    await api.delete(`api/posts/${postId}`)
    const posts = AppState.posts
    const postIndex = posts.findIndex(post => post.id == postId)
    posts.splice(postIndex, 1)
  }
  async getAllPosts() {
    const res = await api.get('api/posts')
    logger.log(res.data)
    const posts = res.data.posts.map(pojo => new Post(pojo))
    AppState.posts = posts
  }
}
export const feedService = new FeedService()