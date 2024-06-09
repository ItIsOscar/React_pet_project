// let status = "line" 



class ListStatus {
  constructor() {}
  getCurrentValue = () => {
    return sessionStorage.getItem("listStatus") || "line"
  }
  setState: React.Dispatch<React.SetStateAction<string>> = () => {}
  toggleListStatus = () => {
    sessionStorage.setItem("listStatus", this.getCurrentValue() == "line" ? "squad" : "line")
    this.setState(this.getCurrentValue)
  }
}

let listStatusController = new ListStatus()
// Object.freeze(listStatusController)  
export default listStatusController

// var listStatusController = {
//   currentValue: "line",
//   toggleListStatus: () => {
//     console.log(this.currentValue)
//     let changes = this.currentValue == "line" ? "squad" : "line"
//     console.log(changes)
//     sessionStorage.setItem("lineStatus", changes)
//   }
// }

// if(ListStatus.instance) {
//   return  ListStatus.instance
// } 
// ListStatus.instance = this