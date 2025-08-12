import { AppState } from "@/AppState.js"
import { Card } from "@/models/Card.js"
import { scryfall } from "./AxiosService.js"

class MTGService {
  async getRandom() {
    const res = await scryfall.get('/cards/random')
    console.log(res.data)
    const cardData = res.data
    AppState.card = new Card(cardData)
  }

  async getCards() {




  }


}

export const mtgService = new MTGService()

// curl get https://api.scryfall.com/cards/named?fuzzy=aur+warlead
// switch api point for value