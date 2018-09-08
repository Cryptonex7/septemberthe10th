import { Switch, Route } from 'react-router-dom'
import React from 'react';
import GalleryHome from '../components//Gallery/GalleryHome';
import Shivangi from '../components//Gallery/Shivangi';
import Anujeet from '../components//Gallery/Anujeet';
import Vaibhav from '../components//Gallery/Vaibhav';
import Us from '../components//Gallery/Us';
import Mon from '../components//Gallery/Mon';
import All from '../components//Gallery/All';

const MainRouter = ({upstate}) => (
    <Switch>
        <Route
            exact path="/gallery"
            render={(routeProps) => (
                <GalleryHome {...routeProps}
                    upstate={upstate}/>
            )}
        />
        <Route
            path="/gallery/shivangi"
            render={(routeProps) => (
            <Shivangi {...routeProps} />
            )}
        />
        <Route
            exact path="/gallery/anujeet"
            render={(routeProps) => (
            <Anujeet {...routeProps} />
            )}
        />
        <Route
            exact path="/gallery/vaibhav"
            render={(routeProps) => (
            <Vaibhav {...routeProps} />
            )}
        />
        <Route
            exact path="/gallery/mansi"
            render={(routeProps) => (
            <Mon {...routeProps} />
            )}
        />
        <Route
            exact path="/gallery/us"
            render={(routeProps) => (
            <Us {...routeProps} />
            )}
        />
        <Route
            exact path="/gallery/all"
            render={(routeProps) => (
            <All {...routeProps} />
            )}
        />
    </Switch>
)

export default MainRouter;