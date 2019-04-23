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

import { injectGlobal } from "styled-components";
injectGlobal`
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    font-family: 'Open+Sans', sans-serif;
  }
`
 
class App extends Component {
    constructor(props) {
        super(props);
        this.history = createHistory({ basename: process.env.PUBLIC_URL });
        this.initialHistory = this.history.location.pathname.replace(/\//, '');

        this.state = {
            active: this.initialHistory,
            showInfoBox: {
              workflowMockupUpdate: false,
              workflowTextImport: false,
              workflowTextStyling: false,
              workflowGraphicImport: false,
              workflowGraphicStyling: false,
              workflowFormatting: false,
              workflowDtpChecklist: false,
              workflowConvertToMobi: false,
            }
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

    toggleInfoBox = step => {
      const showInfoBox = { ...this.state.showInfoBox };
      showInfoBox[step] = !showInfoBox[step];
      this.setState({showInfoBox});
      console.log("Done")
    }

    render() {
    
    return (
        <AppContainer>
    	   <Router history={this.history}>
    	       <React.Fragment>
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

     	  	       	</HeaderLinks>
     	  	       </HeaderContainer>
  
     	  	    <Route exact path="/" component={Intro} />
              <Route path="/adds" component={Adds} />
              <Route path="/graphics" component={Graphics} />
              <Route path="/epub" render={() => (<EPub showInfoBox={this.state.showInfoBox} toggleInfoBox={this.toggleInfoBox}/>)} />
              <Route path="/pdf" component={Pdf} />
  
     	      </React.Fragment>
     	  </Router>
     	</AppContainer>
    );
  }
}

export default App;