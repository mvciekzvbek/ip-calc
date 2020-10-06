import * as React from 'react';
import Hamburger from './Hamburger';
import styled from 'styled-components';

const StyledNavbar = styled.div`
  background: #03a4fc;
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: white;

  .logo {
    line-height: 55px;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="logo">
        IP Calculator
      </div>
      <Hamburger />
    </StyledNavbar>
  )
}

export default Navbar