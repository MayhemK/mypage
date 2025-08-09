export class Card {
  constructor(data) {
    this.artist = data.artist
    this.colorIdentity = data.colorIdentity
    this.manaCost = data.manaCost
    this.id = data.id
    this.imageUrl = data.imageUrl
    this.name = data.name
    this.originalText = data.originalText
    this.originalType = data.originalType
    this.power = data.power
    this.rarity = data.rarity
    this.set = data.set
    this.setName = data.setName
    this.subtypes = data.subtypes
    this.text = data.text
    this.toughness = data.toughness
    this.type = data.type
  }
}