import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This is where child pages will render */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
