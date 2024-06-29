interface typeInterface {
  value: string
  title: string
}

export class SearchType implements typeInterface {
  value: string
  title: string
  constructor(value: string, title: string) {
    this.value = value
    this.title = title
  }
}