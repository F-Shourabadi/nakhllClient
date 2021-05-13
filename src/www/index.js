import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import Routes, { RenderRoutes } from '../routes/RoutesConfig';
import { PageFront } from './front/PageFront';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/counter/Actions';

let Www = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(increment())
    }, [])
    return (
        // <Switch>
        //     <Route exact path='/' render={(props) => <PageFront {...props}/> }/>
        //     <Route exact path='/fp' render={(props) => <PageFront {...props}/> }/>
        // </Switch>
        <RenderRoutes routes={ Routes }/>
    )
}

export { Www };
