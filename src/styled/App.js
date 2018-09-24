import styled from 'styled-components';
 
export const AppContainer = styled.div`
	min-height: 100vh;
	background-color: #efefef;
`

export const HeaderContainer = styled.header`
	background-color: #bb0000;
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
	box-sizing: border-box;

	:hover {
		border-bottom: white 4px solid;
	}

	a {
		text-decoration: none;
		color: #dddddd;

	:hover {
		color: #ffffff;
	}
	}
`