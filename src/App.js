import React, { Component } from 'react';
import {
  Router,
  Route,
  Link,
  NavLink
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
    constructor(props) {
        super(props);
        this.state = {
            aktiv: 'null',
        };
    }

  render() {
    return (
        <AppContainer>
    	   <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
    	       <div>
     	  	       <HeaderContainer>
     	  	       	<HeaderLogoContainer>
     	  	       		<NavLink to="/" onClick={() => this.setState({aktiv: 'null'})}>
     	  	       			<HeaderLogo src={logo} alt="Szortal logo"/>
     	  	       		</NavLink>
     	  	       	</HeaderLogoContainer>
     	  	       	<HeaderLinks>

     	  	       		<NavLink to="/adds" onClick={() => this.setState({aktiv: 'adds'})}> 
                            <HeaderButton aktiv={this.state.aktiv === 'adds'}>
                                Reklamy
                            </HeaderButton>
                        </NavLink>

                        <NavLink to="/graphics" onClick={() => this.setState({aktiv: 'graphics'})}> 
                            <HeaderButton aktiv={this.state.aktiv === 'graphics'}>
                                Grafiki
                            </HeaderButton>
                        </NavLink>

                        <NavLink to="/epub" onClick={() => this.setState({aktiv: 'epub'})}> 
                            <HeaderButton aktiv={this.state.aktiv === 'epub'}>
                                EPub
                            </HeaderButton>
                        </NavLink>

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