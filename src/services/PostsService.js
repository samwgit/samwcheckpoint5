import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { Post } from "../models/Post.js"
import { SandboxApi, SandboxApiPosts } from "./AxiosService.js"

class PostsService {
  async getPosts(pageUrl = '') {
    const res = await SandboxApiPosts.get(pageUrl)
    AppState.posts = []
    AppState.posts = res.data.posts.map(p => new Post(p))
    // AppState.nextPage = res.data.newer
    // AppState.previousPage = res.data.older
    // console.log(newer);
    // console.log(older);
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

  async likePost(id) {
    // TODO pass the id of the post you have clicked on in place of ':id'
    const res = await SandboxApi.post(`api/posts/${id}/like`)
    const index = AppState.posts.findIndex(p => p.id == id)
    AppState.posts[index] = res.data
  }

  async createPost(formData) {
    const res = await SandboxApi.post('api/posts', formData)
    AppState.post = new Post(res.data)
  }
}

export const postsService = new PostsService()