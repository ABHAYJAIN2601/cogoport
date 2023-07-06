import './KnowMore.css';
const KnowMore = () => {
    return ( <div className="know-more-wrapper">
        <img className='homepage-video'src='./homepage-video.webp' alt = 'homepage_video'/>
        <div className='know-more-footer'>
            <div className='know-more-left'>
                <h1>Grow Faster with Cogoport</h1>
                <p>know more about Cogoport's Global Trade Plafrom</p>
            </div>
            <div>
                <button className='btn-yellow'>Know More</button>
            </div>
        </div>
    </div> );
}
 
export default KnowMore;