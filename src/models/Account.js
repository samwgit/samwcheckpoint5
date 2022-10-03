export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.creatorId = data.creatorId
    this.coverImg = data.coverImg
    this.graduated = data.graduated
    this.github = data.github
    this.linkedin = data.linkedin
    this.class = data.class
  }
}
