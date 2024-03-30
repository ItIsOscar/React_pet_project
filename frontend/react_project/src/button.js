


export function Button() {
  // let allUsers = fetch("http://localhost:2000/api/users/all", {
  //     method: "GET",
  //   })
  //   allUsers.then(result => {
  //     console.log(result)
  //   })
  //   let promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       for(let i = 1; i <= 100; i++) {
          
  //         setTimeout(() => {
  //           console.log(`dima myzik №${i}`)
  //           if(i == 100) {
  //             resolve("OSCAR MYZIK")
  //           }
  //         }, 100 * i); 
  //       }
  //     }, 3000)
  //   })
  //   promise.then(result => {
  //     console.log(result)
  //   })
  //   console.log("blablabla") 
  function randomFive() {
    let random = Math.floor(Math.random() * 10)
    console.log("random",random)

    let five = new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log('five',"5")
        resolve("papuasiki")
      }, random * 1000)
    })
    five
      .then(result => {
        console.log(result)
        // return result + " " + "rylayt"
        return new Promise((resolve, reject)=> {
          resolve(result + " " + "rylyat")
        }) 
      })
      .then(result => {
        console.log(result)
      })
      .catch((er) => {
        console.log(`какой еще нафиг ${er}!`)
      })
  }
  return (
    <button onClick={randomFive} style={{height: "300px"}}>Нажми,ну ты же хочешь нажать, ну давай!</button>
  )
}