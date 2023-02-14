import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ProductRow from './components/ProductRow';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Carousel/>
      </div>
      <div>
        <ProductRow/>
      </div>
      <div>
        <About/>
      </div>
    </>
  );
}

export default App;
