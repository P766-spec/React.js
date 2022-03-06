import React, { Component } from 'react';

// Stateless Functional Components
    const NavBar = props => {
        console.log('NavBar - Rendered');

    return (
    <nav className="navbar navbar-light bg-light">
        <div class="container-fluid">
      <a classname="navbar-brand" href="#">
          Navbar{" "} 
          <span className="badge bg-pill bg-secondary m-2">
              {props.totalCounters}
              </span>
          </a>
          </div>
  </nav>
   );
 };
   

export default NavBar;