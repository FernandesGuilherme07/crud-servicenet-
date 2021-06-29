import React from "react"
import { Switch, Route } from "react-router-dom"



import { Users } from "./pages/createClients"

import { myClients } from './pages/myclients'



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
        <Switch>
            <Route exact path="/">
             <myClients/>
            </Route>

            <Route exact path="/createclients">
                 <Users/>
            </Route>
      
            
        </Switch>
    );
}