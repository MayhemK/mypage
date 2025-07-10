import { AppState } from "@/AppState.js"

class ClickerService {
  hatch(power) {
    AppState.snakes += power
  }
  increaseCL(power, price) {
    AppState.clickLevel += power
    AppState.snakes -= price

  }
  increaseAL(power, price) {
    AppState.autoLevel += power
    AppState.snakes -= price
  }
}

export const clickerService = new ClickerService()