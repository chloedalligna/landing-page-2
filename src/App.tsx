import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Feedback from './components/Feedback';
import About from './components/About';
import Form from './components/Form';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        backgroundColor: "aliceblue",
      }}>

      <Header/>

      <Home/>

      <Products/>

      <Feedback/>

      <About/>
      
      <Form/>

      <Location/>

      <Contact/>

      <Footer/>
    </div>
  );
}

export default App
