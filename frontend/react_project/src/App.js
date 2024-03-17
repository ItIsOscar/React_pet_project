import Filters from './components/header/filters';

import SignOrLogIn from './components/SingOrLogIn/SingOrLogIn';
import "./App.scss"

import Navigation from './components/navigation/navigation';



function App() {
  return (
    <>
    <Navigation />
    <div className='content'>
      <Filters />
    </div>
  {/* <SignOrLogIn / */}
    </>
  );
}



export default App;
