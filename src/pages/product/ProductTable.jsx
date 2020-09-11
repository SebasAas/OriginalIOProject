import React from 'react';

// CSS
import 'assets/css/product/ProductTable.css'

// Pages
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';

function ProductTable() {
  return (
    <div className="product__table__wrapper">
      <div className="product__table__container__info__image">
        <ProductImages />
        <ProductInfo />
      </div>
    </div>
  )
}

export default ProductTable
