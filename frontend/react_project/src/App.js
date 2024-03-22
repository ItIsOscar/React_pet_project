import Filters from './components/filters/filters';

import SignOrLogIn from './components/SingOrLogIn/SingOrLogIn';
import "./App.scss"

import Navigation from './components/navigation/navigation';
import LineCard from './components/shared/lineCardProduct/lineCard';
import Banner from './components/banner/banner';
import SquadCard from './components/shared/squadCardProduct/squadCardProduct';
import { useState } from 'react';

const product = [
  {
    pic: "https://avto-ravon.ru/wp-content/uploads/2022/02/Ravon-R2-1024x768-1-e1644232727494.jpg",
    name: "Chevrolet Spark",
    cost: "12000000 сум",
    seller: "USA agenty",
    characteristics: [
      {type: "status",  value: "б/у" },
      {type: "color", value: "green"},
      {type: "transmissionType", value: "12 LMBA"}
    ]
  },
  {
    pic: "https://avto-ravon.ru/wp-content/uploads/2022/02/Ravon-R2-1024x768-1-e1644232727494.jpg",
    name: "Chevrolet Spark",
    cost: "12000000 сум",
    seller: "USA agenty",
    characteristics: [
      {type: "status",  value: "б/у" },
      {type: "color", value: "green"},
      {type: "transmissionType", value: "12 LMBA"}
    ]
  },
  {
    pic: "https://avto-ravon.ru/wp-content/uploads/2022/02/Ravon-R2-1024x768-1-e1644232727494.jpg",
    name: "Chevrolet Spark",
    cost: "12000000 сум",
    seller: "USA agenty",
    characteristics: [
      {type: "status",  value: "б/у" },
      {type: "color", value: "green"},
      {type: "transmissionType", value: "12 LMBA"}
    ]
  }
]

export default function App() {
  let [formOfProduct, changeForm] = useState("line")

  document.addEventListener("keydown", (e) => {
    if(e.key == "t") {
      console.log("change")
      changeForm("squad")
    }
  })

  let products = product.map((obj) => {
    if(formOfProduct == "line" ) {
      return <LineCard 
      pic={obj.pic}
      name={obj.name} 
      cost={obj.cost} 
      seller={obj.seller} 
      characteristics={obj.characteristics} />
    } else {
      return <SquadCard 
      pic={obj.pic}
      name={obj.name} 
      cost={obj.cost} 
      seller={obj.seller} 
      characteristics={obj.characteristics} />
    }
  })

  return (
    <>
    <Navigation />
    <Banner />
    <div className='content'>
      <Filters />
      <div className={formOfProduct == "line" ? "productList_line" : "productList_squad"}>
        {products}
      </div>
    </div>  
  {/* <SignOrLogIn /> */}
    </>
  );
}

let lastFilters = JSON.stringify({
  mark: "BMW",
  state: "new",
  color: "gold",
})

// let chingiz = {
//   age: 24 
// }
// let oscar = {
//   age: 16 
// }
// let developers = {
//   fullStack: chingiz,
//   frontend: oscar
// }
// let country = "o`zbekistan"

// localStorage.setItem("lastFilters", lastFilters)
// sessionStorage.setItem("lastFilters", lastFilters)

// console.log(Map)
// let map = new Map() 
// console.log(JSON.parse(sessionStorage.getItem("lastFilters")))
// console.log(sessionStorage.key(0))

function* getPresident() {
  yield "Abama"
  yield "Trump"
  return "Bayden"
}

// let currentPresident = getPresident()

// console.log(currentPresident.next())

// setTimeout(() => {
//   console.log(currentPresident.next())
// }, 1000)
// setTimeout(() => {
//   console.log(currentPresident.next())
// }, 2000)

// function numberRandomizator() {
//   return Math.floor(Math.random() * 10) 
// } console.log("number", numberRandomizator())

// function worldRandomizator() {
//   const alphabet = [...'abcdefghijklmnopqrstuvwxyz']
//   console.log(alphabet)
//   let index = Math.floor(Math.random() * 25)
//   let world = alphabet[index]
//   console.log(index)
//   return world
// } 
// console.log("world", worldRandomizator())

// function* passwordRandomizator() {
//   yield numberRandomizator()
//   yield worldRandomizator()
//   yield numberRandomizator()
//   yield worldRandomizator()
//   yield numberRandomizator()
//   return "!"
// }

// function generateRandomPassowrd() {
//   let result = passwordRandomizator()
 
//   return `${result.next().value}${result.next().value}${result.next().value}${result.next().value}${result.next().value}${result.next().value}`
// }
// console.log("result", generateRandomPassowrd())


