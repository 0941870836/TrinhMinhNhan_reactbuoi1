import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Slider from "./components/Slider";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div>
        <Header />
        <Slider />
        {/* <Contact /> */}
        <Product />
        <Footer />
      </div>
    </div>
  );
}

export default App;
