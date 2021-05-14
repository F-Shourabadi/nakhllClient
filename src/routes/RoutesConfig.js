import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Login from '../common/module/login/Login';
import NotFound from '../common/pages/NotFound';
import HandleCustomComponent from '../www/front/module/checkCustom/HandleCustomComponent';
import FpanelTest from '../www/frontPanel/module/FpanelTest';
import FpanelTestNew from '../www/frontPanel/module/FpanelTestNew';
import PageFrontPanel from '../www/frontPanel/PageFrontPanel';

export const RenderRoutes = ({ routes }) => {


    return (
        <Switch>
            {
                routes.map((route, index) => {
                    return <RoutWithSubRout key={index} {...route} />
                })
            }
            <Route component={() => <NotFound />} />
        </Switch>
    )
}

export const RoutWithSubRout = (route) => {

    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={(props) => <route.component {...props} routes={route.routes} />}
        />
    )
}

const Routes = [
    { path: '/', key: 'ROOT', exact: true, component: Login },
    {
        path: '/app', key: 'APP', exact: false, component: (props) => {

            if (typeof window !== 'undefined' && !localStorage.getItem('user')) {
                return <Redirect to={'/'} />
            }
            console.log(`props`, props)
            return <RenderRoutes {...props} />
        },
        routes: [
            { path: '/app', key: 'APP_ROOT', exact: true, component: (props) => <h3>app root</h3> },
            { path: '/app/page', key: 'APP_Page', exact: false, component: (props) => <h1>app page</h1> },
            { path: '/app/table', key: 'APP_Page', exact: false, component: (props) => <HandleCustomComponent /> },
        ]
    },
    {
        path: '/fp', key: 'FP', exact: false, component: (props) => <RenderRoutes {...props} />,
        routes: [
            { path: '/fp', key: 'FP_ROOT', exact: true, component: (props) => <PageFrontPanel component={FpanelTest} /> },
            { path: '/fp/page', key: 'FP_ROOT', exact: false, component: (props) => <PageFrontPanel component={FpanelTestNew} /> },
        ]
    }
];
export default Routes;