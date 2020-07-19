import React, {Component, Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Input from './Components/Input';
import Records from './Components/Records';
import { Container } from 'semantic-ui-react'

class App extends Component {
    render() {
        return (
            <Fragment>
            <NavBar />
            <Container>
            <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/input" component={Input} />
            <Route path="/records" component={Records} />
            <Route component={Error} />
                
            </Switch>
            </Container>

            </Fragment>
        );
    }
}

export default App;