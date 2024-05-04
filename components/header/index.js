import Layout from '../layout';
import React from "react";

export default function Header () {
  return (
    <div>
      <div id="main-navbar" className="navbar">
        <h2 className="logo"><a href='/'>MyEcommerce</a></h2>
        <nav>
          <ul>
            <li>
              <a href="/products">Products</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};