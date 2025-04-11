import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-4 border-top mt-5">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} BookStore - NF Academy</p>
        <small className="text-muted">Built with 🤯&🍵 using React & Bootstrap</small>
      </div>
    </footer>
  );
};

export default Footer;
