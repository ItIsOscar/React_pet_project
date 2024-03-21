import Filters from './components/filters/filters';

import SignOrLogIn from './components/SingOrLogIn/SingOrLogIn';
import "./App.scss"

import Navigation from './components/navigation/navigation';
import LineCard from './components/shared/lineCardProduct/lineCard';

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


export default function App() {
  return (
    <>
    <Navigation />
    <div className='content'>
      <Filters />
      <LineCard />
    </div>  
  <SignOrLogIn />
    </>
  );
}