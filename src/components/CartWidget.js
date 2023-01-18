import React from 'react'

const CartWidget = () => {
  return (
    <div>
      <span className="material-icons header__link">
        shopping_cart
      </span>
      <div className='cart__amount'>0</div>
    </div>
  )
}

export default CartWidget