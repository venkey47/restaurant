import React from 'react';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="grain" />
        <div className="orb orb--1" />
        <div className="orb orb--2" />
        <div className="orb orb--3" />
      </div>
      <div className="container hero__content">
        <h1 className="display">Bold Flavors. Honest Heat.</h1>
        <p className="lead">Authentic biryani and signature fry, crafted fresh every day.</p>
        <div className="hero__cta">
          <a href="#menu" className="btn btn--primary btn--lg">Explore Menu</a>
          <a href="#enquiry" className="btn btn--ghost btn--lg">Bulk Delivery</a>
        </div>
      </div>
    </section>
  );
}


