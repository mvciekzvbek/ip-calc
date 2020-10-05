import styled from 'styled-components';

const StyledNavbar = styled.div`
  background: #03a4fc;
`;

export default function Navbar() {
  return (
    <>
      <nav>
        <StyledNavbar>
          Navbar Content
        </StyledNavbar>
      </nav>
    </>
  )
};