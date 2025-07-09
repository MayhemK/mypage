import { AppState } from "@/AppState.js"

class ClickerService {
  hatch() {
    AppState.snakes++

  }
}

export const clickerService = new ClickerService()