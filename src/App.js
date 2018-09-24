import React, { Component } from 'react';
import {
  Router,
  Route,
  Link
} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import Intro from './components/Intro';
import Layout from './components/Layout';
import EPub from './components/EPub';

import logo from './img/logo_biale.png';

import {
    AppContainer,
	HeaderContainer,
	HeaderLogoContainer,
	HeaderLogo,
	HeaderLinks,
	HeaderButton
} from './styled/App';


class App extends Component {
  render() {
    return (
        <AppContainer>
    	   <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
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
     	</AppContainer>
    );
  }
}

export default App;