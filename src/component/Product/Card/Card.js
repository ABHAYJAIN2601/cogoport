import './Card.css';

function Card(props) {
  return (
    <div>
        <div className='card_category'>
            <img src={props.img_src} alt ={props.product}/>
            <h3 className='card_heading'>{props.product}</h3>
            <span className='card-footer'>
            <p className='find-more'>Find Out More</p>
            <img src='./right-arrow.svg' alt='arrow'/>
            </span>
           
        </div>
    </div>
  );
}

export default Card;
