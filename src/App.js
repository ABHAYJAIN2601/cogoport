import './App.css';
import Navbar from './component/Navbar';
import Product from './component/Product/Product';
import Industries from './component/Industries/Industries';
import Footer from './component/Footer/Footer';
import Blogs from './component/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='first'>
      <img src = 'https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/home-banner-background-1.webp' alt='background'/>
      </div>
      <div className='first-right'>
        <p>Grow Faster, Go Global.</p>
        <p>Strengthen your Supply Chain, and Scale your Business</p>
      </div>
   
      <p>One Stop Solution for Your Supply Chain</p>
      <p>
Connected Shipping, Finance, and Trade-tech, to Power Global Trade and Supply Chains.</p>
<img src='./map-supply-chain.webp' alt = 'map-supply-chain'/>
      <Product/>
      <Industries/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
