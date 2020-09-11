import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// CSS
import 'assets/css/colorPalette/ColorPalette.css';
import 'assets/css/product/ProductInfo.css';

// Components
import Modal from 'components/modal/Modal';
import Button from 'components/button/Button';

// Redux
import { connect } from 'react-redux';
import { setProductCart } from 'store/actions/cartAction';

function ProductInfo({ currentProduct, setProductCart }) {

  const [colorSelected, setColorSelected] = useState();
  const [sizeSelected, setSizeSelected] = useState();
  const [showModal, setShowModal] = useState(false);
  const [border,] = useState("2px solid #DE8F75");
  const [backgroundcolor,] = useState("#E29D86");
  const [textcolor,] = useState('white');
  const [isActiveColor, setIsActiveColor] = useState();
  const [isActiveSize, setIsActiveSize] = useState();
  const [className,] = useState("color__palette__colors");

  // console.log(currentProduct);

  const { title, code, colors, discount, price, sizes, images, id } = currentProduct;

  useEffect(() => {
    return () => {
      setSizeSelected();
      setColorSelected();
      setIsActiveColor();
      setIsActiveSize();
    }
  }, [currentProduct])

  const setColorProduct = (e) => {
    setIsActiveColor(e.target.getAttribute('value'))
    setColorSelected(e.target.getAttribute('value'));
  }

  const setSizeProduct = (e) => {
    setIsActiveSize(parseInt(e.currentTarget.innerText));
    setSizeSelected(e.currentTarget.innerText);
  }

  const colorsAvailables = () => {

    if (Object.keys(colors).length) {
      return (
        <div className="product__info__colors__availables">
          {Object.entries(colors).map(color => (
            <div key={color[1]} className={className} onClick={(e) => setColorProduct(e)} value={color[0]}
              style={{ backgroundColor: color[1], border: (isActiveColor === color[0] ? border : "none") }}></div>
          ))}
        </div>
      )
    } else {
      return (
        <p><b>Sem cor atualmente</b></p>
      )
    }
  }

  const sizesAvailables = () => {

    // 

    return (
      <div className="product__info__size__available">
        {sizes.map(size => (
          <div key={size} onClick={(e) => setSizeProduct(e)} className="product__info__size"
            style={{ backgroundColor: (isActiveSize === size ? backgroundcolor : "white"), color: (isActiveSize === size ? textcolor : "black") }}
          >{size}</div>
        ))}
      </div>
    )
  }

  const addToCart = () => {

    if (colorSelected === undefined || colorSelected === "" &&
      sizeSelected === undefined || colorSelected === "") {
      alert("Você precisa selecionar a cor e o tamanho")
    } else {
      setShowModal(true)

      const product = {
        id,
        title,
        price,
        image: images[0],
        count: 1
      }

      setProductCart(product)
    }
  }

  return (
    <>
      <Modal show={showModal} setShowModal={setShowModal} imgProd={images[0]} />
      <div className="product__info__main__wrapper">
        <div className="product__info__product__title">
          <h2><b>{title}</b></h2>
          <p>{code}</p>
        </div>
        <div>
          <div className="product__info__price__wrapper">
            <div className="product__info__price__table">
              <div className="product__info__price__discount">
                {
                  discount.length > 0 ?
                    <>
                      <p className="product__info__discount">R$ {discount}</p>
                      <span className="product__info__discount__separator"> | </span>
                      <p className="product__info__price"><b>R$ {price}</b></p>
                    </>
                    :
                    <p>{price}</p>
                }
              </div>
              <div>
                <p className="product__info__cuotes">Ou 6x de  R$ {(price / 6).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product__info__colors__availables__wrapper">
          <p>Cor: {
            colorSelected !== undefined ?
              `(${colorSelected})`
              :
              null
          }
          </p>
          {colorsAvailables()}
        </div>
        <div className="product__info__size__wrapper">
          <div className="product__info__size__buttons">
            <p>Tamanho: {
              sizeSelected !== undefined ?
                `(${sizeSelected})`
                :
                null
            }</p>
            <p><Link to="/">Guia de medidas</Link></p>
          </div>
          {sizesAvailables()}
          <div className="product__info__wrapper__button">
            <button className="product__info__button__cart" onClick={() => addToCart()}>
              Adicionar á Sacola
            </button>
          </div>
          <div className="product__info__product">
            <p>Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.</p>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  currentProduct: state.product.currentProduct
})

const mapDispatchToProps = {
  setProductCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
