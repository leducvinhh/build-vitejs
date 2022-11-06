import { useState } from 'react';
import StyledHeader from './styled';

function Header() {
  const [test, setTest] = useState();
  return (
    <StyledHeader>
      <div className="inner">
        <div className="navbar">
          <div className="navbar__about"></div>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
