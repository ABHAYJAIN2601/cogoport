import './Card.css';

function Card(props) {
  return (
    <div>
        <div className='card_category'>
            <img src={props.img_src} alt ={props.product}/>
            <p className='card_heading'>{props.product}</p>
            <p>Find Out More</p>
        </div>
    </div>
  );
}

export default Card;
