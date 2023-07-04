import product from '../../data';
import Card from './Card/Card';
import './Product.css';

function Product() {
  return (
    <div>
        <p>Our Products</p>
        <div className='products_container'>
        {product.map((items) => {
            return  (<div className='product_category'>
            <p className='product_category_heading'>{items.title}</p>
            {items.sub_product.map((sub_items) => {
              return (
            <Card img_src={items.img_src} product={sub_items}/>)})}
        </div>)
        })}
        </div>
    </div>
  );
}

export default Product;
