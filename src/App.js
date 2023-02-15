import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ProductRow from './components/ProductRow';
import About from './components/About';
import Glass from './components/Glass'
import FixedVideo from './components/FixedVideo';

// const bottleVideoURL = "https://video.wixstatic.com/video/11062b_9c77d10fbe6d4bdfbffe3f7ff1cabd03/720p/mp4/file.mp4";

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
      <div>
        <Glass/>
      </div>
      <div style={{zIndex: "-1"}}>
        <FixedVideo/>
      </div>
    </>
  );
}

export default App;
