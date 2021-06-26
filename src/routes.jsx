import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from '../src/pages/home'
import Clients from '../src/pages/myClients'
import CreateClients from '../src/pages/createClients'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/myClients">
                <Clients/>
            </Route>

            <Route exact path="/createClients">
               <CreateClients/>
            </Route>
            
        </Switch>
    );
}