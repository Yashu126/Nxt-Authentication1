import './index.css'
import Header from '../Header'

const Cart = () => (
  <div className="cart-con">
    <Header />
    <div className="cart-page">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="cart-img"
      />
      <h1 className="cart-heading">Cart</h1>
    </div>
  </div>
)
export default Cart
