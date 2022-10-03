export class Post {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.creator = data.creator
    this.createdAt = data.createdAt
    this.likes = data.likes
    this.newer = data.newer
    this.older = data.older
  }
}