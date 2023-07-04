import './Footer.css';
const data1 = [
    'Mandideep (IN) to Le Havre',
    'Mandideep (IN) to Puerto Quetzal',
    'Mandideep (IN) to Constanta',
'Mandideep (IN) to Dar es Salaam',
'Mandideep (IN) to Tema',
'Mandideep (IN) to Ambarli',
'Mandideep (IN) to Beira',
'Mandideep (IN) to Valencia',
'Mandideep (IN) to Antwerp Churchill Terminal (BE)',
'Mandideep (IN) to Altamira',

];
const data2 = [
    'Mandideep (IN) to Banjul',
'Mandideep (IN) to Jeddah',
'Mandideep (IN) to Manzanillo, MX',
'Mandideep (IN) to Bilbao',
'Mandideep (IN) to Aden',
'Mandideep (IN) to Cork',
'Mandideep (IN) to LUANDA',
'Mandideep (IN) to London gateway port',
'Mandideep (IN) to Hamad',
'Mandideep (IN) to Novorossiysk',
]
const data3 =[
    'Mandideep (IN) to Vigo',
'Mandideep (IN) to Savannah, Georgia',
'Mandideep (IN) to Rotterdam',
'Mandideep (IN) to Livorno (Leghorn)',
'Mandideep (IN) to Monrovia',
'Mandideep (IN) to Alexandria',
'Mandideep (IN) to New York',
'Mandideep (IN) to Bremerhaven',
'Mandideep (IN) to Zanzibar',
'Mandideep (IN) to Conakry',
]

const Footer = () => {
    return ( 
    <div className="footer-div">
        <div>
        {data1.map((port)=>{
            return (
                <p>{port}</p>
            )
        })}
        </div>
        <div>
        {data2.map((port)=>{
            return (
                <p>{port}</p>
            )
        })}
        </div>
        <div className='port-3'>
        {data3.map((port)=>{
            return (
                <p>{port}</p>
            )
        })}
        </div>
        
    </div>
     );
}
 
export default Footer;