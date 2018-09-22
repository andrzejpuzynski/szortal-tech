import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo_biale.png';

const HeaderContainer = styled.header`
	background-color: #cc0000;
 	height: 60px;
 	padding: 5px;
`;

const HeaderLogo = styled.img`
  position: absolute;
  display: block;
  height: 50px;
  left: 10px;
  alt: logo;
  src: ${logo};
`

class Header extends React.Component {
	render() {
		return (
        	<HeaderContainer>
        		<HeaderLogo src={logo} alt="Szortal logo"/>
        	</HeaderContainer>
		)
	}
}

export default Header;