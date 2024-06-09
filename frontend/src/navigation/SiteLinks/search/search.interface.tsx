
type validateFetchString = string

export interface FormSearchDataInterface {
  data: FormData
  type: validateFetchString
  originalName: string
  validaFetchName: validateFetchString[]
} 

export class FormSeach implements FormSearchDataInterface {
  data: FormData
  type: validateFetchString
  originalName: string
  validaFetchName: validateFetchString[]
  constructor(formSearchData: FormData) {
    this.data = formSearchData
    this.type = formSearchData.get("type") as string
    this.originalName = formSearchData.get("name") as string
    this.validaFetchName = this.originalName.trim().split(" ")
  }
}

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