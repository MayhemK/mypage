export class Card {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.imageUrl = data.image_uris?.normal
    this.release = data.released_at
    this.typeline = data.type_line
    this.text = data.oracle_text
    this.power = data.power
    this.toughness = data.toughness
    this.artist = data.artist
    this.price = data.prices?.usd
    this.foil = data.prices?.usd_foil
    this.etched = data.prices?.usd_etched
  }
}
