import React from 'react';

// CSS
import 'assets/css/modal/Modal.css';

// Component
import Button from 'components/button/Button';

export default function Modal({ show, setShowModal, imgProd }) {

  const closeModal = () => {
    setShowModal(false);
  }

  if (show) {
    return (
      <div id="modal" className="modal__wrapper">
        <div className="modal__content">
          <span className="close col-12" onClick={() => closeModal()}>X</span>
          <div>
            <img src={require(`assets/images/products/${imgProd}`)} alt="" />
            <p><b>Produto adicionado com sucesso!</b></p>
            <div className="product__info__wrapper__button">
              <Button setPadding={20} text="Finalizar Compra" />
            </div>
            <button onClick={() => closeModal()}>Continuar Comprando</button>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}