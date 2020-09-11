import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'

// Components
import Modal from 'components/modal/Modal';
import Button from 'components/button/Button';

// CSS
import 'assets/css/product/ProductImages.css';

// Redux
import { connect } from 'react-redux';
import { setProductCart } from 'store/actions/cartAction';

function ProductImages({ currentProduct, setProductCart }) {

  let container = useRef();
  const [colorSelected, setColorSelected] = useState();
  const [sizeSelected, setSizeSelected] = useState();
  const [showModal, setShowModal] = useState(false);
  const [className, setClassName] = useState("color__palette__colors");
  let allBox;
  let containerHeight;
  let margin = 30;
  let items = 0;
  let totalItems = 0;


  const { title, code, colors, discount, price, sizes, images, id, videos } = currentProduct;

  useEffect(() => {
    return () => {
      setSizeSelected();
      setColorSelected();
    }
  }, [currentProduct])

  const setColorProduct = (e) => {
    setColorSelected(e.target.getAttribute('value'));
    // setClassName("color__palette__colors active");
    console.log(e.currentTarget.id);
  }

  const setSizeProduct = (e) => {
    setSizeSelected(e.currentTarget.innerText)
    console.log(e.currentTarget.innerText);
  }

  const colorsAvailables = () => {

    if (Object.keys(colors).length) {
      return (
        <div className="product__info__colors__availables">
          {Object.entries(colors).map(color => (
            <div key={color[1]} className={className} onClick={(e) => setColorProduct(e)} value={color[0]} style={{ backgroundColor: color[1] }}></div>
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
    return (
      <div className="product__info__size__available">
        {sizes.map(size => (
          <div key={size} onClick={(e) => setSizeProduct(e)} className="product__info__size">{size}</div>
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

  useEffect(() => {
    allBox = container.current.children;
    containerHeight = container.current.offsetHeight;
  }, [])

  const getTheElement = () => {
    const childs = (container.current.children.length)
    const heightOfComponent = (container.current.offsetHeight)

    // Divido la anchura del componente por los hijos para saber individualmente cuanto ocupan
    const pixelsToMove = heightOfComponent / childs;

    let actualValue = container.current.style.marginTop;

    // Obtengo el valor actual del margen
    if (actualValue !== "") {
      actualValue = (parseInt(actualValue.split("px")[0]))
    }

    return { actualValue, pixelsToMove, heightOfComponent }

  }

  const goFowardSlide = () => {

    const { actualValue, pixelsToMove, heightOfComponent } = getTheElement();

    const toMove = actualValue - pixelsToMove - 30;

    // Si es menor que el total - 1 ancho de hijo retorno asi no sigue desplazandose
    if (toMove <= -heightOfComponent + pixelsToMove) return;

    container.current.style.marginTop = toMove + "px";
  }

  const goBackSlide = () => {

    const { actualValue, pixelsToMove } = getTheElement();

    // Cantidad que tengo que mover
    const toMove = actualValue + pixelsToMove + 30;

    // Si es mayor a 100px, retorno asi no sigue desplazandose
    if (toMove > 100) return;

    container.current.style.marginTop = toMove + "px";
  }

  const showcaseProduct = () => {

    return (
      <div className="thumbnail-slider2">
        <div ref={container} className="thumbnail-container2">
          {
            images.map(image => (
              <div key={image} id={`slide-${image}`} className="item2">
                <img src={require(`assets/images/products/${image}`)} alt="" />
              </div>
            ))
          }
        </div>
      </div>
    )

  }

  return (
    <>
      <Modal show={showModal} setShowModal={setShowModal} imgProd={images[0]} />
      <div className="product__images__wrapper">

        {/* Info product hide on screen grater than 790px*/}
        <div className="product__image__product__title">
          <h2><b>{title}</b></h2>
          <p>{code}</p>
        </div>

        <div className="product__images__slider">
          <div className="product__images__product__container">
            <div className="product__image__thumbnails__wrapper">
              <div onClick={() => goBackSlide()}>
                <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.6023 18.3961C22.222 18.7393 21.6438 18.7396 21.2631 18.3968L15.9991 13.6567L10.7351 18.3968C10.3544 18.7396 9.77625 18.7393 9.39595 18.3961L9.065 18.0974C8.62495 17.7003 8.62495 17.0097 9.065 16.6126L15.3291 10.9596C15.7097 10.6161 16.2885 10.6161 16.6691 10.9596L22.9332 16.6126C23.3733 17.0097 23.3733 17.7003 22.9332 18.0974L22.6023 18.3961Z" fill="black" />
                </svg>
              </div>
              {showcaseProduct()}
              <div onClick={() => goFowardSlide()}>
                <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.39579 10.6257C9.77609 10.2825 10.3542 10.2822 10.7349 10.6249L15.9989 15.3651L21.263 10.6249C21.6436 10.2822 22.2218 10.2825 22.6021 10.6257L22.933 10.9243C23.3731 11.3215 23.3731 12.012 22.933 12.4091L16.6689 18.0621C16.2883 18.4056 15.7096 18.4056 15.329 18.0621L9.06484 12.4091C8.62479 12.012 8.62479 11.3215 9.06484 10.9243L9.39579 10.6257Z" fill="black" />
                </svg>
              </div>
            </div>
            <div className="product__images__main__image">
              <div className="product__images__slides">
                {
                  images.map(image => (
                    <div key={image} id={`slide-${image}`}>
                      <img src={require(`assets/images/products/${image}`)} alt="" />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        {/* Color, size, and ...rest */}

        <div className="product__image__info__colors__availables__wrapper">
          <div>
            <p>Cor: {
              colorSelected !== undefined ?
                `(${colorSelected})`
                :
                null
            }
            </p>
            {colorsAvailables()}
          </div>
        </div>
        <div className="product__image__info__size__wrapper">
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
          <div className="product__image__price__button__container">
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
            <div className="product__info__wrapper__button">
              <Button setPadding={5} text="Adicionar á Sacola" onClick={() => addToCart()} />
            </div>
          </div>
          <div className="product__image__info__descripcion">
            <p>Descrição</p>
            <div className="product__info__product">
              <p>Rasteira em atanado soft com tira no dedo e fechamento de fivela. Possui sola sempre na cor do cabedal.</p>
            </div>
          </div>
        </div>

        {/* End of... */}

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

export default connect(mapStateToProps, mapDispatchToProps)(ProductImages);
