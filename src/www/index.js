import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import Routes, { RenderRoutes } from '../routes/RoutesConfig';
import { PageFront } from './front/PageFront';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/counter/Actions';
import { CustomHeaderComponent } from './../common/module';
// import './../../node_modules/bootstra'

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
        <div>
            <CustomHeaderComponent />
            <RenderRoutes routes={Routes} />
        </div>
    )
}

export { Www };
