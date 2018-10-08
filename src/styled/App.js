import styled from 'styled-components';

export const AppContainer = styled.div`
	min-height: 100vh;
	background-color: #efefef;
`

export const HeaderContainer = styled.header`
	background-color: #bb0000;
 	height: 60px;
 	box-sizing: border-box;
`

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
    text-decoration: none;
    color: ${props => props.aktiv ? "#fff" : "#ccc"};
    border-bottom: ${props => props.aktiv ? "white 4px solid" : "#b00"};
    background-color: ${props => props.aktiv ? "#c00" : "#b00"};

    :hover {
        border-bottom: #fff 4px solid;
        transition: 300ms;
    }

    }
`