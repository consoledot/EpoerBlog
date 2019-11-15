import React from 'react'
import { Route } from 'react-router'
import App from './App'
import Fullpost from './fullpost'
export default (
    <Route path="/" exact component={App}>
        <Route path="/:id" component={Fullpost} />
    </Route>
)