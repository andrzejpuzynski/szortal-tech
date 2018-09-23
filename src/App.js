import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import styled from 'styled-components';

import Intro from './components/Intro';
import Layout from './components/Layout';
import EPub from './components/EPub';

import logo from './img/logo_biale.png';

import './App.css';

const HeaderContainer = styled.header`
	background-color: #cc0000;
 	height: 60px;
 	box-sizing: border-box;
`;

const HeaderLogoContainer = styled.div`
	position: absolute;
	left: 0px;
	display: inline-block;
	height: 60px;
	left: 0px;
	font-size: 24px;
	padding: 8px 20px;
`

const HeaderLogo = styled.img`
  position: absolute;
  display: block;
  height: 44px;
  left: 10px;
  alt: logo;
  src: ${logo};
`

const HeaderLinks = styled.ul`
	position: absolute;
	right: 0px;
	height: 60px;
	margin: 0px;
	line-height: 60px;
`
const HeaderButton = styled.li`
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

class App extends Component {
  render() {
    return (
    	<div className="App">
    	<Router>
    		<div>
     		<HeaderContainer>
     			<HeaderLogoContainer>
     				<Link to="/">
     					<HeaderLogo src={logo} alt="Szortal logo"/>
     				</Link>
     			</HeaderLogoContainer>
     			<HeaderLinks>
     				<HeaderButton>
     					<Link to="/layout">Layout</Link>
     				</HeaderButton>
     				<HeaderButton>
     					<Link to="/epub">EPub</Link>
     				</HeaderButton>
     			</HeaderLinks>
     		</HeaderContainer>

     		<Route exact path="/" component={Intro} />
          	<Route path="/layout" component={Layout} />
          	<Route path="/epub" component={EPub} />

     		</div>
     	</Router>
     	</div>
    );
  }
}

export default App;