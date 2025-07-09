import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {import('./models/Car.js').Car[]} */
  cars: [],
  /** @type {import('./models/House.js').House[]} */
  houses: [],
  /** @type {import('./models/Job.js').Job[]} */
  jobs: [],
  /** @type {import('./models/Pet.js').Pet[]} */
  pets: [],
  /** @type {import('./models/Post.js').Post[]} */
  posts: [],
  snakes: 0,
  ClickUpgrades: [
    { name: '1', power: 1, price: 15, quantity: 0 },
    { name: '2', power: 5, price: 45, quantity: 0 }
  ],
  AutoUpgrades: [
    { name: '3', power: 10, price: 20, quantity: 0 },
    { name: '4', power: 25, price: 100, quantity: 0 }
  ]
})

