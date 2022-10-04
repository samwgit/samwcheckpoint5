export class Post {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.creator = data.creator
    // NOTE this is how you shorten something is is contained within an api
    this.createdAt = data.createdAt.substring(0, 10)
    this.likes = data.likes
    this.newer = data.newer
    this.older = data.older
  }
}