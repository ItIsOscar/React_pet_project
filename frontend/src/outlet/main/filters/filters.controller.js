import { DEFAULT_VALUE, FILTER_PREFIX } from "./filters.config"

function initilizateFilterPrototype(name, type) {
  if(sessionStorage.getItem(FILTER_PREFIX + name)) {
    return sessionStorage.getItem(FILTER_PREFIX + name)
  } else {
    sessionStorage.setItem(FILTER_PREFIX + name, DEFAULT_VALUE)
    return DEFAULT_VALUE[type]
  }
}

class filtersControllerClass {
  constructor() {}
  originForm = null
  initilizateFilter = {
    number: name => initilizateFilterPrototype(name, "number"),
    string: name => initilizateFilterPrototype(name, "string")
  }
  addFiltersList = list => {
    this.originForm = list
  }
  saveNewActiveOption = (name, value) => {
    sessionStorage[FILTER_PREFIX + name] = value
  }
  sendFiltersData = () => {
    let formData = new FormData(this.originForm)
    let fetchData = new FormData()

    for(let [key, value] of formData.entries()) {
      console.log(key, value)
      if(value != 0 && value != "all") {
        fetchData.append(key, value)
        console.log("pass")
      }
    }

    fetch("", {
        method: "POST",
        body: fetchData
    })
  } 
  resetAllFilters = () => {
    this.originForm.reset()
    Object.keys(sessionStorage).filter(key => key.includes(FILTER_PREFIX))
      .forEach(filterKey => sessionStorage.setItem(filterKey, DEFAULT_VALUE))
  }
}

let filtersController = new filtersControllerClass()
export default filtersController