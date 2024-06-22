
class filtersControllerClass {
 
  readonly FILTER_PREFIX = "filters_"

  readonly TYPE_PREFIX = {
    number: "number_",
    string: "string_"
  }

  readonly DEFAULT_VALUE = {
    number: "0",
    string: "all"
  }

  initilizateFilterPrototype(name: string, type: "string" | "number"): string {
    const nameFilter = this.FILTER_PREFIX + this.TYPE_PREFIX[type] + name

    let isStoredInStorage: boolean = Boolean(sessionStorage.getItem(nameFilter))

    if(isStoredInStorage) {
      return sessionStorage.getItem(nameFilter)!
    } else {
      sessionStorage.setItem(nameFilter, this.DEFAULT_VALUE[type])
      return this.DEFAULT_VALUE[type]
    }
  }

  initilizateFilter = {
    number: (name: string) => this.initilizateFilterPrototype(name, "number"),
    string: (name: string) => this.initilizateFilterPrototype(name, "string")
  }

  saveNewActiveOption = (name: string, type: "string" | "number", value: string) => {
    const nameFilter = this.FILTER_PREFIX + this.TYPE_PREFIX[type] + name

    sessionStorage[nameFilter] = value
  }

  originForm?: HTMLFormElement

  addFiltersList = (list: HTMLFormElement) => {
    this.originForm = list
  }

  sendFiltersData = () => {
    let formData: FormData = new FormData(this.originForm)
    let fetchData: FormData = new FormData()

    for(let [key, value] of formData.entries()) {
      if(value != "0" && value != "all") {
        fetchData.append(key, value)
      }
    }

    fetch("", {
        method: "POST",
        body: fetchData
    })
  } 

  resetAllFilters = () => {
    this.originForm!.reset()
    Object.keys(sessionStorage).filter(key => key.includes(this.FILTER_PREFIX))
      .forEach(filterKey => {
        if(filterKey.includes("number")) {
          sessionStorage.setItem(filterKey, this.DEFAULT_VALUE.number)
        } else {
          sessionStorage.setItem(filterKey, this.DEFAULT_VALUE.string)
        }
    })
  }
}

let filtersController = new filtersControllerClass()
export default filtersController