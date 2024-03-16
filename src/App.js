import Header from './components/header/header';

import SignOrLogIn from './components/SingOrLogIn/SingOrLogIn';
import "./app.sass"
// import './App.css';
import Navigation from './components/navigation/navigation';



function App() {
  return (
    <>
    <Navigation />
    <div className='content'>
      <Header />
    </div>
    {/* <SignOrLogIn /> */}
    </>
  );
}



export default App;
