import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  height: 55px;
  width: 100%;
  background: #03a4fc;
  border-top: 2px solid #f1f1f1;
  position: absolute;
  bottom:0;
  color: white;
  justify-content: center;
  align-items: center;

  .footer__author {
    a {
      text-decoration: underline;
      color: white;
    }
  }

  .footer__icon {
    position: absolute;
    right: 3%;
    width: 2em;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div className='footer__author'>
        <p>Created by <a href='https://github.com/mvciekzvbek'>mvciekzvbek</a></p>
      </div>
      <div className='footer__icon'>
        <a href='https://github.com/mvciekzvbek/ip-calc' target='_blank'>
          <img src='/images/github-brands.svg' alt='github logotype'/>
        </a>
      </div>
    </StyledFooter>
  )
};