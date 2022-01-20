import React from 'react';
import {Link} from 'gatsby';
export default function header() {

 const ulStyle = {
     display: "inline-flex",
     listStyleType: "none",
     textAlign:"right"
 }
 const liStyle = {
 
        display: "block",
        padding: "8px",
       
    
}

  return <header>
      <nav >
          <ul style={ulStyle}>
              <li ><Link to="/" style={liStyle}>Home</Link></li>
              <li ><Link to="/about" style={liStyle}>About</Link></li>
              <li ><Link to="/blog" style={liStyle}>Blog</Link></li>
              <li ><Link to="/contact" style={liStyle}>Contact</Link></li>
          </ul>
      </nav>

  </header>;
}
