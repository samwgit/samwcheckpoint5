import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { Cpage } from "../models/Cpage.js"
import { Post } from "../models/Post.js"
import { SandboxApi, SandboxApiPosts, SandboxChangePagePlease } from "./AxiosService.js"

class PostsService {
  async getPosts(pageUrl = '') {
    AppState.Cpage = null
    const res = await SandboxApiPosts.get(pageUrl)
    AppState.posts = []
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.Cpage = new Cpage(res.data)

    // AppState.nextPage = res.data.newer
    // AppState.previousPage = res.data.older
    // console.log(newer);
    // console.log(older);
  }




  async getPostByUrl(Url) {
    AppState.Cpage = null
    const res = await SandboxChangePagePlease.get(Url)
    AppState.posts = []
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.Cpage = new Cpage(res.data)
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

  async deletePost(id) {
    const res = await SandboxApi.delete(`api/posts/${id}`)
    AppState.posts.splice(AppState.posts.findIndex(p => p.id == id), 1)
  }
}

export const postsService = new PostsService()