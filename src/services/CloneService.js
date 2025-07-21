import { AppState } from "@/AppState.js"

class CloneService {
  changeThemeValue(select) {
    const themeNum = select
    AppState.themeValue = themeNum
    // const elem = document.getElementById("darkBar")
    // const elem2 = document.getElementById("darkBar2")
    // if (AppState.themeValue == 0) {
    //   elem.classList.remove("color-bar", "darkBar-1", "darkBar-2", "darkBar-3")
    //   elem.classList.add("darkBar-0")
    //   elem2.classList.remove("color-bar", "darkBar-1", "darkBar-2", "darkBar-3")
    //   elem2.classList.add("darkBar-0")
    // }
    // if (AppState.themeValue == 1) {
    //   elem.classList.remove("color-bar", "darkBar-1", "darkBar-2", "darkBar-3")
    //   elem.classList.add("darkBar-1")
    //   elem2.classList.remove("color-bar", "darkBar-1", "darkBar-2", "darkBar-3")
    //   elem2.classList.add("darkBar-1")
    // }
    // if (AppState.themeValue == 2) {
    //   elem.classList.remove("color-bar", "darkBar-1", "darkBar-2", "darkBar-3")
    //   elem.classList.add("darkBar-2")
    //   elem2.classList.remove("color-bar", "darkBar-1", "darkBar-2", "darkBar-3")
    //   elem2.classList.add("darkBar-2")
    // }
    // if (AppState.themeValue == 3) {
    //   elem.classList.remove("color-bar", "darkBar-1", "darkBar-2", "darkBar-3")
    //   elem.classList.add("darkBar-3")
    //   elem2.classList.remove("color-bar", "darkBar-1", "darkBar-2", "darkBar-3")
    //   elem2.classList.add("darkBar-3")
    // }
  }
}
export const cloneService = new CloneService()