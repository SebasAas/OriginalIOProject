import React from 'react';

// Pages
import Logo from 'pages/header/Logo';
import Menu from 'pages/header/Menu';
import Product from 'pages/product/ProductPage';
import Stand from 'pages/stand/StandPage';
import Footer from 'pages/footer/FooterPage';

function LandingPage() {
  return (
    <>
      <Logo />
      <Menu />
      <Product />
      <Stand />
      <Footer />
    </>
  )
}

export default LandingPage
