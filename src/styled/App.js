import styled from 'styled-components';
 
export const HeaderContainer = styled.header`
	background-color: #cc0000;
 	height: 60px;
 	box-sizing: border-box;
`;

export const HeaderLogoContainer = styled.div`
	position: absolute;
	left: 0px;
	display: inline-block;
	height: 60px;
	left: 0px;
	font-size: 24px;
	padding: 8px 20px;
`

export const HeaderLogo = styled.img`
  position: absolute;
  display: block;
  height: 44px;
  left: 10px;
`

export const HeaderLinks = styled.ul`
	position: absolute;
	right: 0px;
	height: 60px;
	margin: 0px;
	line-height: 60px;
`
export const HeaderButton = styled.li`
	display: inline-block;
	height: 60px;
	font-size: 24px;
	padding: 0px 20px;

	:hover {
		border-bottom: white 3px solid;
	}

	a {
		text-decoration: none;
		color: white;
	}
`