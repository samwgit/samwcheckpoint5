import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Post.js').Account} */
  account: {},
  /** @type {import('./models/Post.js').Post[]} */
  posts: [],
  /** @type {import('./models/Account.js').Account} */
  activeProfile: {},
  /** @type {import('./models/Post.js').Post} */
  post: {},
  nextPage: null,
  previousPage: null,
  /** @type {import('./models/Advert.js').Advert} */
  advert: {},

})
