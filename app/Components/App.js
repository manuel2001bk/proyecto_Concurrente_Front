import React from 'react';
import css from "../assets/css/login.css";

import Login from "./Login";
import Register from "./Register";
import NotFound from "../pages/NotFound";
import Home from "./Home";
import {BrowserRouter,Switch,Route} from "react-router-dom";


class App extends React.Component{
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/Login' component={Login}/>
                        <Route exact path='/Register' component={Register}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default App;