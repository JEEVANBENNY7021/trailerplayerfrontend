import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div>
       <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 50px', background: 'rgba(0, 0, 0, 0.7)' }}>
    <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
      <i className="fab fa-youtube" style={{ fontSize: '24px', color: 'red', marginRight: '10px' }}></i>
      <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Trailer Play Show</span>
    </div>
    <div className="menu" style={{ display: 'flex', alignItems: 'center' }}>
      <a href="/" className="active" style={{ color: 'red', textDecoration: 'none', margin: '0 15px', fontSize: '16px' }}>HOME</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 15px', fontSize: '16px' }}>ABOUT</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 15px', fontSize: '16px' }}>BLOG</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 15px', fontSize: '16px' }}>PAGES</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 15px', fontSize: '16px' }}>TEAM</a>
      <a href="#" style={{ color: 'white', textDecoration: 'none', margin: '0 15px', fontSize: '16px' }}>CONTACT</a>
    </div>
    <div className="icons" style={{ display: 'flex', alignItems: 'center' }}>
      <i className="fas fa-search" style={{ fontSize: '18px', margin: '0 10px', cursor: 'pointer' }}></i>
      <i className="fas fa-bell" style={{ fontSize: '18px', margin: '0 10px', cursor: 'pointer' }}></i>
      <i className="fas fa-user account" style={{ fontSize: '18px', color: 'red', fontWeight: 'bold', margin: '0 10px', cursor: 'pointer' }}></i>
      <span style={{ color: 'red', fontWeight: 'bold' }}>ACCOUNT</span>
    </div>
  </nav>
    </div>
  );
}

export default Header;
