import './Industries.css';
const Industries = () => {
    const industry = [
        {
            name:'Chemicals',
            img_src:'https://www.cogoport.com/images/chemical.svg'
        },
        {
            name:'Pharmaceuticals',
            img_src:'https://www.cogoport.com/images/paracetamol.svg'
        },
        {
            name:'Electronics',
            img_src:'https://www.cogoport.com/images/electronics.svg'
        },
        {
            name:'White Goods',
            img_src:'https://www.cogoport.com/images/whitegoods.svg'
        },
        {
            name:'Textiles',
            img_src:'https://www.cogoport.com/images/textiles.svg'
        },
        {
            name:'Manufacturing',
            img_src:'https://www.cogoport.com/images/manufactoring.svg'
        },
        {
            name:'Agriculture',
            img_src:'https://www.cogoport.com/images/agriculture.svg'
        },
    ]
    return ( 
        <div className='industry_wrapper'>
            <p>Industries Served</p>
            <div className="industry_container">
            {industry.map((item)=>{
            return<div>
                <div>
                <img src = {item.img_src} alt = {item.name}/>
                <p>{item.name}</p>
                </div>
            </div>})}
            </div>
        </div>
     );
}
 
export default Industries;