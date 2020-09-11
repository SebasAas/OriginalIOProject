import React, { useEffect } from 'react';

// CSS
import 'assets/css/product/ProductPage.css';

// Pages
import ProductTable from './ProductTable';
import CartPage from 'pages/cart/CartPage';

// Components
import Breadcrumb from 'components/breadcrumb/Breadcrumb';

// Redux
import { connect } from 'react-redux';
import { getProducts } from 'store/actions/productAction';

function ProductPage(props) {

  useEffect(() => {
    props.getProducts();
  }, [])

  return (
    <>
      <Breadcrumb />
      <div className="product__page__wrapper">
        <CartPage />
        <ProductTable />
      </div>
    </>
  )
}

const mapDispatchToProps = {
  getProducts
}

export default connect(null, mapDispatchToProps)(ProductPage);
