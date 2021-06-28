import React from "react"
import { Switch, Route } from "react-router-dom"

import { Myclients }from '../src/pages/home'

import { Users } from "./pages/createClients"



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
        <Switch>
            <Route exact path="/">
                <Myclients/>
            </Route>

            <Route exact path="/createclients">
                 <Users/>
            </Route>
      
            
        </Switch>
    );
}