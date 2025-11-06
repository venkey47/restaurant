import React from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Menu from './components/Menu.jsx';
import Location from './components/Location.jsx';
import EnquiryForm from './components/EnquiryForm.jsx';

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Menu />
        <Location />
        <EnquiryForm />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Biryani & Fry. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


