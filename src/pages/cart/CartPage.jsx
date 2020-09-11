import React, { useState } from 'react';

// CSS
import 'assets/css/cart/CartPage.css';

// Component
import Button from 'components/button/Button';

// Redux
import { connect } from 'react-redux';
import { changeStateCart, deleteProductCart, increaseProductCart, decreaseProductCart } from 'store/actions/cartAction';

function CartPage({ cart, isOpen, changeStateCart, cartItems, deleteProductCart, increaseProductCart, decreaseProductCart }) {

  const [totalValue, setTotalValue] = useState(0);
  let partialValue = 0;

  const setValueZero = () => {
    if (totalValue === 0) return;
    setTotalValue(0)
  }

  const calculateTotal = async () => {
    if (cart.length > 0) {
      await cart.map(product => (
        partialValue = partialValue + parseFloat(product.count) * parseFloat(product.price)
      ))

      setTotalValue(partialValue)
    }
    else {
      setValueZero();
    }
  }

  const calculateItems = (product, value) => {
    // Si la cantidad es 1, y se quiere decrementar entonces elimino el producto
    if (product.count === 1 && value === -1) {
      deleteProductCart(product.id)
    } else {
      if (value === 0) {
        deleteProductCart(product.id)
      } else if (value === 1) {
        increaseProductCart(product.id);
      } else {
        decreaseProductCart(product.id);
      }
    }

  }


  const showProductCart = () => {

    calculateTotal()

    if (cart.length !== 0) {

      return (
        cart.map(product => (
          <div key={product.id} className="cart__page__product__wrapper col-12">
            <div className="col-2">
              <img src={require(`assets/images/products/${product.image}`)} className="cart__page__product__image" alt="" />
            </div>
            <div className="col-6">
              <div className="cart__page__product__info">
                <p className="cart__page__product__title">{product.title}</p>
                <p className="cart__page__product__price"><b>R$ {product.price}</b></p>
              </div>
            </div>
            <div className="col-2 cart__page__center__col">
              <div className="cart__page__product__counter">
                <p>
                  <button className="cart__page__counter__button" onClick={() => calculateItems(product, -1)}>
                    -
              </button>
                </p>
                <p> {product.count} </p>
                <p>
                  <button className="cart__page__counter__button" onClick={() => calculateItems(product, 1)}>
                    +
                  </button>
                </p>
              </div>
            </div>
            <div className="col-2 cart__page__center__col">
              <div className="cart__page__product__counter">
                <p>
                  <button className="cart__page__counter__button" onClick={() => calculateItems(product, 0)}>
                    x
                  </button>
                </p>
              </div>
            </div>
          </div>
        )))
    } else {
      return (
        <div className="cart__page__empty__cart">
          <h1 className="cart__page__panel__title">Nao Tem Produto Na Sacola</h1>
        </div>
      )
    }
  }

  if (isOpen) {
    return (
      <div className="cart__page__main">
        <div className="cart__page__white__panel">

          <div className="cart__page__white__panel__wrapper">
            <span className="close col-12" onClick={() => changeStateCart(false)}>X</span>
            <h2 className="cart__page__panel__title">SACOLA</h2>
            <h3 className="cart__page__panel__item__count">{cartItems} Items</h3>
            <hr></hr>

            <div className="cart__page__wrapper">
              {showProductCart()}
            </div>

          </div>
          <div className="cart__page__payment__main">
            <div className="cart__page__wrapper__payment">
              <p>Faltam R$ xx,xx para você <strong>Ganhar Frete Grátis</strong></p>
            </div>
            <div className="cart__page__payment__total">
              <div className="col-6 cart__page__col__payment">
                <p className="cart__page__value__total"><strong>Total: R$ {totalValue.toFixed(2)}</strong></p>
                <p className="cart__page__value__parcel">até 3x de R$ {(totalValue / 3).toFixed(2)} sem juros</p>
              </div>
              <div className="col-6 cart__page__payment__col__button">
                <Button setPadding={7} text="Finalizar Compra" />
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  } else {
    return null;
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  isOpen: state.cart.isOpen,
  cartItems: state.cart.items,
})

const mapDispatchToProps = {
  changeStateCart,
  deleteProductCart,
  increaseProductCart,
  decreaseProductCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
