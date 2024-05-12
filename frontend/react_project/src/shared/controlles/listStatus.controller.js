
export default class ListStatus {
  constructor() {
    if(ListStatus.instance) {
      return  ListStatus.instance
    } 
    ListStatus.instance = this
  }
  currentValue = "line"
  toggleListStatus() {
    console.log(this.currentValue)
    let changes = this.currentValue == "line" ? "squad" : "line"
    console.log(changes)
    // sessionStorage.setItem("lineStatus", changes)
  }
}
var listStatusController = {
  currentValue: "line",
  toggleListStatus: () => {
    console.log(this.currentValue)
    let changes = this.currentValue == "line" ? "squad" : "line"
    console.log(changes)
    // sessionStorage.setItem("lineStatus", changes)
  }
}