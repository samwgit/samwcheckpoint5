import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { Post } from "../models/Post.js"
import { SandboxApi, SandboxApiPosts } from "./AxiosService.js"

class PostsService {
  async getPosts(pageUrl = '') {
    const res = await SandboxApiPosts.get(pageUrl)
    AppState.posts = []
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.next
    AppState.previousPage = res.data.next
  }

  async getPostsByCreatorId(creatorId) {
    AppState.posts = []
    const res = await SandboxApi.get('api/posts', {
      params: {
        creatorId
      }
    })
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async likePost() {
    const res = await SandboxApi.get('api/posts/:id/like')
  }

  async createPost(formData) {
    const res = await SandboxApi.post('api/posts', formData)
    AppState.post = new Post(res.data)
  }
}

export const postsService = new PostsService()