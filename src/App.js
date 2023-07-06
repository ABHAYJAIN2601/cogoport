import './App.css';
import Navbar from './component/Navbar';
import Product from './component/Product/Product';
import Industries from './component/Industries/Industries';
import Footer from './component/Footer/Footer';
import Blogs from './component/Blogs/Blogs';
import GetStarted from './component/GetStarted/GetStarted';
import KnowMore from './component/KnowMore/KnowMore';
import ReactPlayer from 'react-player/lazy'
import { useEffect, useState } from 'react';

// Render a YouTube video player

function App() {
  useEffect(()=>{
    setisPlaying(true);
    setisLoading(false);
  },[])
  const [isPlaying,setisPlaying] = useState(true);
  const [isLoading,setisLoading] = useState(true);
  console.log(isPlaying)
  return (

    <div className="App">
      <Navbar/>
      <div className='background-section box-main'>
      <div className='first-left'>
        <h1>Grow Faster, Go Global.</h1>
        <p>Strengthen your Supply Chain, and Scale your Business</p>
        <input label='phone number'></input>
        <button>Get Started</button>
      </div>
      <div className='first-right'>
      {!isLoading && <ReactPlayer  playsinline='true' stopOnUnmount ='true' playing = {isPlaying} loop={isPlaying} url='./cogoverse_desktop_3_webm.webm' />}
      {/* <source src="" type="video/webm"/> */}
      </div>
      </div>
      
      
      <div className='supply-chain'>
        <div className='left-supply-chain'>
      <h2>One Stop Solution for Your Supply Chain</h2>
      <p>
Connected Shipping, Finance, and Trade-tech, to Power Global Trade and Supply Chains.</p>
</div>
<div>
<img src='./map-supply-chain.webp' alt = 'map-supply-chain'/></div>
      </div>
     
      <Product/>
      <Industries/>
      <GetStarted/>
      <KnowMore/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
