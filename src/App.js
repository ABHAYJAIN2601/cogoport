import "./App.css";
import Navbar from "./component/Navbar";
import Product from "./component/Product/Product";
import Industries from "./component/Industries/Industries";
import Footer from "./component/Footer/Footer";
import Blogs from "./component/Blogs/Blogs";
import GetStarted from "./component/GetStarted/GetStarted";
import KnowMore from "./component/KnowMore/KnowMore";
import ReactPlayer from "react-player/lazy";
import { useEffect, useState } from "react";
import Working from "./component/Working/Working";

// Render a YouTube video player

function App() {
  useEffect(() => {
    setisPlaying(true);
    setisLoading(false);
  }, []);
  const [isPlaying, setisPlaying] = useState(true);
  const [isLoading, setisLoading] = useState(true);
  console.log(isPlaying);
  return (
    <div className="App">
      <Navbar />
       <div className="background-section box-main">
        <div className="first-left">
          <h1>Grow Faster, Go Global.</h1>
          <p>Strengthen your Supply Chain, and Scale your Business</p>
          <div className="input-btn">
            <input className="input-style" placeholder="phone number"></input>
            <button className="btn-input-red right-curve">Get Started</button>
          </div>
        </div>
        <div className="first-right">
          {!isLoading && (
            <ReactPlayer
              muted='true'
              playsinline="true"
              stopOnUnmount="true"
              playing={isPlaying}
              loop={isPlaying}
              url="./cogoverse_mobile_gif_2.webm"
            />
          )}
          
        </div>
      </div> 
 
      <div className="number-section">
        <span>
          <h2 className="number">180+</h2>
          <h3>Countries Served</h3>
        </span>
        <span>
          <h2 className="number">10,000</h2>
          <h3>Ports Pairs Served</h3>
        </span>
        <span>
          <h2 className="number">30,000+</h2>
          <h3>Tons of Air Cargo Moved</h3>
        </span>
        <span>
        <h2 class="number">700,000</h2>
        <h3>Containers Moved</h3>
        </span>
      </div> 
       <div className="bg">
        <div className="supply-chain bg">
          <div className="left-supply-chain">
            <h2>One Stop Solution for Your Supply Chain</h2>
            <p>
              Connected Shipping, Finance, and Trade-tech, to Power Global Trade
              and Supply Chains.
            </p>
          </div>
          <div>
            <img
              className="supply-chain-img"
              src="./map-supply-chain.webp"
              alt="map-supply-chain"
            />
          </div>
        </div> 

        <Product />
      </div>

      <div className="know-more-wrapper">
        <div className="get-started-section">
          <div>
            <h1>Ready to take your Supply Chain to the Next Level?</h1>
          </div>
          <div>
            <button className="btn-red">Get Started</button>
          </div>
        </div>
      </div>
      <Working />
      <div className="bg">
        <Industries />
      </div>
      <GetStarted />
      <KnowMore />

       <Blogs />
       
      <div className="letter-upper-curve"></div>
      <div className="newletter-section">
        <img src="./cogoport-subscribe.webp" alt="newsletter" />
        <div>
          <h2>Subscribe to our newsletter now!</h2>
          <p>Don't miss out on the latest happenings at cogoport.</p>
          <span className="input-btn">
            <input
              className="input-style"
              placeholder="Enter your email here"
            ></input>
            <span>
              <button className="btn-red">Subscribe</button>
            </span>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
