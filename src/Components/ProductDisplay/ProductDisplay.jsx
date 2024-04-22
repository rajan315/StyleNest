import React, { useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useState(ShopContext);
  return (
    <div className='product-display'>
          <div className="productdisplay-left">
              <div className="img-list">
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
              </div>
              <div className="imgs">
                  <img className='main-img' src={product.image} alt="" />
              </div>
        </div>
          <div className="productdisplay-right">
              <h1>{product.name}</h1>
              <div className="right-star">
                  <img src={star_icon} alt="" />
                  <img src={star_icon} alt="" />
                  <img src={star_icon} alt="" />
                  <img src={star_icon} alt="" />
                  <img src={star_dull_icon} alt="" />
                  <p>(122)</p>
              </div>
              <div className="prices">
                  <div className="price-old">₹{ product.old_price}</div>
                  <div className="price-new">₹{ product.new_price}</div>
              </div>
              <div className="description">
                  DESCRIPTION
              </div>
              <div className="right-size">
                  <h1>Select Size</h1>
                  <div className="right-sizes">
                      <div>XS</div>
                      <div>S</div>
                      <div>M</div>
                      <div>L</div>
                      <div>XL</div>
                      <div>XXL</div>
                  </div>
              </div>
              <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
              <p className="category"><span>Category :</span>Women , T-Shirt , CropTop</p>
              <p className="category"><span>Tags :</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay
