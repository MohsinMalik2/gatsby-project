import React from 'react';
import {Link} from 'gatsby';
export default function header() {
  return <header>
      <nav >
          <h1>Mohsin Malik</h1>
          <ul >
              <li ><Link to="/" >Home</Link></li>
              <li ><Link to="/about" >About</Link></li>
              <li ><Link to="/blog" >Blog</Link></li>
              <li ><Link to="/contact" >Contact</Link></li>
          </ul>
      </nav>

  </header>;
}
