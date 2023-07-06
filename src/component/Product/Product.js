import product from '../../data';
import Card from './Card/Card';
import './Product.css';

function Product() {
  return (
    <div className='our-product-section bg'>
        <h3>Our Products</h3>
        <div className='products_container'>
        {product.map((items) => {
            return  (<div className='product_category'>
            <h2 className='product_category_heading'>{items.title}</h2>
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
