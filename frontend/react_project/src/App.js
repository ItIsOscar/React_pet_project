


import "./App.scss"
import { useState } from 'react';

import SignOrLogIn from './components/SingOrLogIn/SingOrLogIn';
import Navigation from './components/navigation/navigation';
import Banner from './components/banner/banner';
import Filters from './components/filters/filters';
import ProductList from "./components/productList/productList";


export default function App() {
  let [formOfProduct, changeForm] = useState("line")

  document.addEventListener("keydown", (e) => {
    if(e.key == "t") {
      console.log("change")
      changeForm(formOfProduct == "line" ? "squad" : "line")
    }
  })

  return (
    <div>
      <Navigation />
      <Banner />
      <div className='content'>
        <Filters />
        <ProductList status={formOfProduct}/>
      </div>  
    </div>
  );
}

// 2 >>