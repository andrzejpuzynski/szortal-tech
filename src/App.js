import React, { Component } from 'react';
import {
  Router,
  Route,
  Link
} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import Intro from './components/Intro';
import Adds from './components/Adds';
import Graphics from './components/Graphics';
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
     	  	       			<Link to="/adds">Reklamy</Link>
     	  	       		</HeaderButton>
                        <HeaderButton>
                            <Link to="/graphics">Grafiki</Link>
                        </HeaderButton>
     	  	       		<HeaderButton>
     	  	       			<Link to="/epub">EPub</Link>
     	  	       		</HeaderButton>
     	  	       	</HeaderLinks>
     	  	       </HeaderContainer>
  
     	  	    <Route exact path="/" component={Intro} />
                <Route path="/adds" component={Adds} />
                <Route path="/graphics" component={Graphics} />
                <Route path="/epub" component={EPub} />
  
     	      </div>
     	  </Router>
     	</AppContainer>
    );
  }
}

export default App;