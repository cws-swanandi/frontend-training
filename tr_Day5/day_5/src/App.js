import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import Home from './Home.js';
import User from './user.js';
import Counter from './counter.js';

function App() {
  let a = "Guest";
  return (
    <div className="App">
      <User datatochild={a}/>
      <Navbar/>
      <Header/>
      <Home/>
      <Counter/>
      <Footer/>

    </div>
  );
}

export default App;
