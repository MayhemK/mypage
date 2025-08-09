import { AppState } from "@/AppState.js"
import { Card } from "@/models/Card.js"
import { mtg } from "./AxiosService.js"

class AIService {

  async getCards() {
    const res = await mtg.get('v1/cards')

    AppState.cards = res.data.cards.map(pojo => new Card(pojo))
    console.log(res.data)



  }


}

export const aiService = new AIService()

// curl get https://api.scryfall.com/cards/named?fuzzy=aur+warlead