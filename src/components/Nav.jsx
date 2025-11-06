import React, { useState } from 'react';
import logo from '../../images/logo.png';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="brand">
          <img
            className="brand__logo"
            src={logo}
            alt="Biryani & Fry logo"
            style={{ width: '150px', height: '60px' }}
          />
        </a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          <a href="#menu">Menu</a>
          <a href="#location">Location</a>
          <a href="#enquiry" className="btn btn--primary">Bulk Enquiry</a>
        </nav>
        <button className="nav__toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}


