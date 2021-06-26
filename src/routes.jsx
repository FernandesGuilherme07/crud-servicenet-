import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from '../src/pages/home'
import Clients from '../src/pages/myClients'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
        <Switch>
            <Route exact path="/">
                login
            </Route>
            <Route exact path="/myClients">
                clientes
            </Route>
            <Route exact path="/createClients">
                Adcionar cliente.
            </Route>
            
        </Switch>
    );
}