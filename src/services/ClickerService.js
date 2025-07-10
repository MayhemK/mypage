import { AppState } from "@/AppState.js"

class ClickerService {
  hatch(power) {
    AppState.snakes += power
  }
  increaseCL(power, price, id) {
    AppState.clickLevel += power
    AppState.snakes -= price
    const arrayId = id - 1
    AppState.ClickUpgrades[arrayId].quantity++
    const priceIncrease = (AppState.ClickUpgrades[arrayId].price * 1.5) * AppState.ClickUpgrades[arrayId].quantity
    AppState.ClickUpgrades[arrayId].price = priceIncrease
  }
  increaseAL(power, price, id) {
    AppState.autoLevel += power
    AppState.snakes -= price
    const arrayId = id - 1
    AppState.AutoUpgrades[arrayId].quantity++
    AppState.AutoUpgrades[arrayId].price = (AppState.AutoUpgrades[arrayId].price * 1.05) * AppState.AutoUpgrades[arrayId].quantity
  }
}

export const clickerService = new ClickerService()