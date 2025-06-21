import { AppState } from "@/AppState.js"
import { api, sandBox } from "./AxiosService.js"
import { Car } from "@/models/Car.js"

class CarsService {
  async getCars() {
    const res = await sandBox.get('api/cars')
    const cars = res.data.map(pojo => new Car(pojo))
    AppState.cars = cars
  }
}
export const carsService = new CarsService()