import React from 'react';
import Footer from './footer';
import Header from './header';
import "../style/index.css"

export default function layout(props) {
  return <div>
        <Header/>
            {props.children}
        <Footer/>
  </div>;
}
