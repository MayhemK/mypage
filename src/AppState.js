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
  clickLevel: 1,
  autoLevel: 0,
  ClickUpgrades: [
    { name: 'Mouse', power: 1, price: 15, quantity: 0 },
    { name: 'Quail', power: 5, price: 60, quantity: 0 },
    { name: 'Gopher', power: 20, price: 180, quantity: 0 },
    { name: 'Chicken', power: 75, price: 540, quantity: 0 }

  ],
  AutoUpgrades: [
    { name: 'Rabbit', power: 10, price: 20, quantity: 0 },
    { name: 'Duck', power: 50, price: 150, quantity: 0 },
    { name: 'Boar', power: 200, price: 750, quantity: 0 },
    { name: 'Turkey', power: 800, price: 3000, quantity: 0 }
  ]
})

