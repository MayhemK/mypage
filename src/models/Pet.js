export class Pet {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.age = data.age
    this.isVaccinated = data.isVaccinated
    this.species = data.species
    this.status = data.status
    this.imgUrl = data.imgUrl
    this.likes = data.likes
  }
}