import React from 'react';
import Footer from './footer';
import Header from './header';
import "../style/index.scss"
import {container, content} from './layout.module.scss'

export default function layout(props) {
  return <div className={container}>
          <div className={content}>
            <Header/>
            {props.children}
          </div>
        
        <Footer/>
  </div>;
}
