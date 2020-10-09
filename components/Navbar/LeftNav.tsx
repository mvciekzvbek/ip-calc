import * as React from "react";
import styled from 'styled-components';
import Link from 'next/link'

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #003754;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;

    li {
      color: #fff;
      width: 80%;
      margin: 0 auto;
      border-bottom: 1px solid white;
    }
  }
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
`

const LeftNav = ({ open }) => {
  return (
    <StyledList open={open}>
      <li>
        <Link href='/' passHref>
          <StyledLink>Calculator</StyledLink>
        </Link></li>
      <li>
        <Link href='/about' passHref>
          <StyledLink href='/about'>About</StyledLink>
        </Link>
      </li>
    </StyledList>
  )
}

export default LeftNav;