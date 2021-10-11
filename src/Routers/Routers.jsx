import React from 'react'
import {Switch,Route} from "react-router"
import HighlightMain from '../Components/Highlights/HighlightMain'
import Highlights from '../Components/Highlights/Highlights'
import MiniNavBar from '../Components/Navbar/MiniNavBar'
import Navbar from '../Components/Navbar/Navbar'

function Routers() {
    return (
        <div>
            <Navbar/>
            <MiniNavBar/>
            <Switch>
                <Route exact path="/">
                    <Highlights/>
                </Route>
                <Route path="/:id">
                    <HighlightMain/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routers
