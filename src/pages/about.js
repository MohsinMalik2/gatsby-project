import React from 'react';
import {Link} from 'gatsby'
export default function about() {
  return <div>
      <h1>About Me</h1>
      <p>This ia a bout page to get to know me</p>
      <p> <Link to='/'>Click me</Link>  to go to home page</p>
  </div>;
}
