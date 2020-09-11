import React, { useEffect, useRef } from 'react';

// CSS
import 'assets/css/stand/StandPage.css';

// Component
import ColorPalette from 'components/colorPalette/ColorPalette';

// Redux
import { connect } from 'react-redux';
import { setCurrentProduct } from 'store/actions/productAction';

function StandPage({ products, setCurrentProduct }) {
  let container = useRef();
  let allBox;
  let containerWidth;
  let margin = 30;
  let items = 0;
  let totalItems = 0;

  let responsive = [
    { breakPoint: { width: 0, item: 1 } }, //si el ancho es mayor a 0 (se va a mostrar 1 item) 
    { breakPoint: { width: 280, item: 2 } }, //si el ancho es mayor a 280 (se van a mostrar 2 item)
    { breakPoint: { width: 600, item: 3 } }, //si el ancho es mayor a 600 (se van a mostrar 3 item)
    { breakPoint: { width: 1000, item: 4 } }, //si el ancho es mayor a 1000 (se van a mostrar 4 item)
    { breakPoint: { width: 1400, item: 6 } } //si el ancho es mayor a 1400 (se van a mostrar 6 item)
  ]

  useEffect(() => {
    resizeElement();
  }, [])

  const resizeElement = () => {

    allBox = container.current.children;
    containerWidth = container.current.offsetWidth;
    for (let i = 0; i < responsive.length; i++) {
      if (window.innerWidth > responsive[i].breakPoint.width) {
        items = responsive[i].breakPoint.item
      }
    }

    evalResizing();
  }

  const evalResizing = () => {

    if (allBox === undefined) return;

    var totalItemsWidth = 0
    for (let i = 0; i < allBox.length; i++) {
      // Anchura y margenes de items
      allBox[i].style.width = (containerWidth / items) - margin + "px";
      allBox[i].style.margin = (margin / 2) + "px";
      totalItemsWidth += containerWidth / items;
      totalItems++;
    }

    // Se setea la anchura y margenes de los items
    container.current.style.width = totalItemsWidth + "px";
  }

  const getTheElement = () => {
    const childs = (container.current.children.length)
    const widthOfComponent = (container.current.offsetWidth)

    // Divido la anchura del componente por los hijos para saber individualmente cuanto ocupan
    const pixelsToMove = widthOfComponent / childs;

    let actualValue = container.current.style.marginLeft;

    // Obtengo el valor actual del margen
    if (actualValue !== "") {
      actualValue = (parseInt(actualValue.split("px")[0]))
    }

    return { actualValue, pixelsToMove, widthOfComponent }

  }

  const goFowardSlide = () => {

    const { actualValue, pixelsToMove, widthOfComponent } = getTheElement();

    const toMove = actualValue - pixelsToMove;

    // Si es menor que el total - 1 ancho de hijo retorno asi no sigue desplazandose
    if (toMove <= -widthOfComponent + pixelsToMove) return;

    container.current.style.marginLeft = toMove + "px";
  }

  const goBackSlide = () => {

    const { actualValue, pixelsToMove } = getTheElement();

    // Cantidad que tengo que mover
    const toMove = actualValue + pixelsToMove;

    // Si es mayor a 100px, retorno asi no sigue desplazandose
    if (toMove > 100) return;

    container.current.style.marginLeft = toMove + "px";
  }

  const newCurrentProduct = (product) => {
    setCurrentProduct(product)
  }

  const showcaseProducts = () => {



    return (
      <div className="thumbnail-slider">
        <div id="container" ref={container}
          className="thumbnail-container">
          {
            products.map(product => (
              <div key={product.id} className="item">
                <div key={product.id} className="stand__page__product__data" onClick={() => newCurrentProduct(product)}>
                  <img src={require(`assets/images/stand/${product.images[0]}`)} alt="" />
                  <div className="stand__page__product__info">
                    <p>R$ {product.price}</p>
                    <div style={{ display: 'flex' }}>
                      <ColorPalette colors={product.colors} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  return (
    <div className="stand__page__wrapper">
      <div>
        <h1 className="text-center stand__page__title">Quem viu, viu também</h1>
      </div>
      <div className="stand__page__overflow">
        <div className="stand__page__product__wrapper">
          {showcaseProducts()}
        </div>
      </div>
      <div className="stand__page__btn__prev__next__wrapper">
        <div onClick={() => goBackSlide()} className="stand__page__btn__prev__next">
          <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.29366 0.938664C8.68389 1.32889 8.68423 1.96146 8.29443 2.35211L3.65667 7L8.29443 11.6479C8.68423 12.0385 8.68389 12.6711 8.29366 13.0613L8.06211 13.2929C7.67158 13.6834 7.03842 13.6834 6.64789 13.2929L1.06211 7.70711C0.671586 7.31658 0.671587 6.68342 1.06211 6.29289L6.6479 0.707106C7.03842 0.316581 7.67158 0.316583 8.06211 0.707107L8.29366 0.938664Z" fill="black" />
          </svg>
        </div>
        <p className="stand__page__pagination">1 de 2</p>
        <div onClick={() => goFowardSlide()} className="stand__page__btn__prev__next">
          <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.706336 13.0613C0.316113 12.6711 0.315768 12.0385 0.705565 11.6479L5.34333 7L0.705565 2.35211C0.315768 1.96146 0.316113 1.32889 0.706335 0.938664L0.937892 0.707108C1.32842 0.316583 1.96158 0.316583 2.35211 0.707108L7.93789 6.29289C8.32841 6.68342 8.32841 7.31658 7.93789 7.70711L2.3521 13.2929C1.96158 13.6834 1.32842 13.6834 0.937892 13.2929L0.706336 13.0613Z" fill="black" />
          </svg>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  products: state.product.products
})

const mapDispatchToProps = {
  setCurrentProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(StandPage);
