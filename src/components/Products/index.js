import './index.css'

import Header from '../Header'

const Products = () => (
  <div className="cart-con">
    <Header />
    <div className="cart-page">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="cart-img"
      />
      <h1 className="cart-heading">Products</h1>
    </div>
  </div>
)
export default Products
