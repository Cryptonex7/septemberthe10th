import { Switch, Route } from 'react-router-dom'
import React from 'react';
import MainContainer from './MainContainer'
import Friends from './Friends';
import GalleryPage from './GalleryPage';

const MainRouter = ({upstate}) => (
    <Switch>
        <Route
            exact path="/"
            render={(routeProps) => (
            <MainContainer {...routeProps} 
                friends = 	{()=>{upstate('friends')}} />
            )}
        />
        <Route
            exact path="/friends"
            render={(routeProps) => (
            <Friends {...routeProps} 
                gallery = 	{()=>{upstate('gallery')}} />
            )}
        />
        <Route
             path="/gallery"
            render={(routeProps) => (
                    <GalleryPage {...routeProps} 
                        home = 	{()=>{upstate('home')}} />
            )}
        />
    </Switch>
)

export default MainRouter;