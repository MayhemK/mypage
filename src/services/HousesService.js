import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { House } from "@/models/House.js"

class HousesService {
  async getHouses() {
    const res = await api.get('api/houses')
    const houses = res.data.map(pojo => new House(pojo))
    AppState.houses = houses
  }
}
export const housesService = new HousesService()