import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ProductRow from './components/ProductRow';

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
    </>
  );
}

export default App;
