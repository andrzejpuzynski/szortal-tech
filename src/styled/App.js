 import styled from 'styled-components';

export const AppContainer = styled.div`
	min-height: 100vh;
	background-color: #efefef;
`

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
	background-color: #bb0000;
 	box-sizing: border-box;
  z-index: 10;
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
  display: flex;
  
  a {
    text-decoration: none;
    :hover {
      &:after {
        content: "";
        display: block;
        transform: translateY(-4px);
        border-top: white 4px solid;
        animation-name: dynamic-border;
        animation-duration: 300ms;
  
        @keyframes dynamic-border {
          0% { margin: 0 50%}
          100% { margin: 0}
        }
      }
    }
  }
`
export const HeaderButton = styled.li`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    height: 60px;
    font-size: 24px;
    padding: 0px 20px;
    box-sizing: border-box;
    text-decoration: none;
    color: ${props => props.active ? "#fff" : "#ccc"};
    border-bottom: ${props => props.active ? "white 4px solid" : "#b00"};
    background-color: ${props => props.active ? "#c00" : "#b00"};
`