import React, { FC } from 'react';
import smallLogo from '../../assets/images/smallLogo.jpg';

interface ManuProps {}

const Manu: FC<ManuProps> = () => (
  <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
 
    <a  href="test" className="navbar-brand"><img src={smallLogo} alt="Logo" width="120" height="35" className="d-inline-block align-text-top"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a  href="test" className="nav-link active" aria-current="page">Home</a>
        </li>
      </ul>
      <a href="/cart" className="nav-link">Cart</a>
    </div>
  </div> 
</nav>
  </div>
);

export default Manu;
