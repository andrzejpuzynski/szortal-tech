import React, { Component } from 'react';
import {
  Router,
  Route,
  NavLink
} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

import Intro from './Intro';
import Adds from './Adds';
import Graphics from './Graphics';
import EPub from './EPub';
import Pdf from './Pdf';
import Szortal from './Szortal';

import logo from '../img/Szortal_logo_vectors_RGB.svg';

import {
    AppContainer,
	HeaderContainer,
	HeaderLogoContainer,
	HeaderLogo,
	HeaderLinks,
    HeaderButton
} from '../styled/App';
 
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

    componentWillMount() {
    // will trigger the callback function whenever a new Route renders
    // a component(as long as this component stays mounted as routes change)
      this.history.listen(() => {
        this.setState(state => ({
            active: this.history.location.pathname.replace(/\//, '')
        }))
      });
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
                        <NavLink to="/pdf" onClick={this.handleClick}>
                          <HeaderButton active={this.state.active === 'pdf'}>
                            PDF
                          </HeaderButton>
                        </NavLink>
                        <NavLink to="/szortal" onClick={this.handleClick}> 
                            <HeaderButton active={this.state.active === 'szortal'}>
                                Szortal
                            </HeaderButton>
                        </NavLink>

     	  	       	</HeaderLinks>
     	  	       </HeaderContainer>
  
     	  	    <Route exact path="/" component={Intro} />
                <Route path="/adds" component={Adds} />
                <Route path="/graphics" component={Graphics} />
                <Route path="/epub" component={EPub} />
                <Route path="/pdf" component={Pdf} />
                <Route path="/szortal" component={Szortal} />
  
     	      </div>
     	  </Router>
     	</AppContainer>
    );
  }
}

export default App;