import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';




function App() {
  return (
    <div className="App">
      <div className='title'>
      <h1>TIM HORTONS</h1>
      <h5>Canadian Meal</h5>
      </div>
      <div>
   <Navbar/>
   </div>
   <div className='body123'>
   <Body/>
   </div>
   <div class='footer1'>
   <Footer/>
   </div>
    </div>
  );
}

export default App;
