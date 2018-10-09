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
        this.history = createHistory({ basename: process.env.PUBLIC_URL });
        this.initialHistory = this.history.location.pathname.replace(/\//, '');

        this.state = {
            active: this.initialHistory,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            active: this.history.location.pathname.replace(/\//, '')
        })
        );
    }

  render() {
    
    return (
        <AppContainer>
    	   <Router history={this.history}>
    	       <div>
     	  	       <HeaderContainer>
     	  	       	<HeaderLogoContainer>
     	  	       		<NavLink to="/" onClick={this.handleClick}>
     	  	       			<HeaderLogo src={logo} alt="Szortal logo"/>
     	  	       		</NavLink>
     	  	       	</HeaderLogoContainer>
     	  	       	<HeaderLinks>

     	  	       		<NavLink to="/adds" onClick={this.handleClick}> 
                            <HeaderButton active={this.state.active === 'adds'}>
                                Reklamy
                            </HeaderButton>
                        </NavLink>

                        <NavLink to="/graphics" onClick={this.handleClick}> 
                            <HeaderButton active={this.state.active === 'graphics'}>
                                Grafiki
                            </HeaderButton>
                        </NavLink>

                        <NavLink to="/epub" onClick={this.handleClick}> 
                            <HeaderButton active={this.state.active === 'epub'}>
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