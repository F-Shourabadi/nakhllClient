import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Template from './app/template';
import App from './app/App';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

export default function serverRenderer({ clientStats, serverStats }) {
    return (req, res, next) => {
        const context = {};
        const markup = ReactDOMServer.renderToString(

            <StaticRouter>
                <Provider store={Store}>
                    <App />
                </Provider>
            </StaticRouter>
        );
        const helmet = Helmet.renderStatic();

        res.status(200).send(Template({
            markup: markup,
            helmet: helmet,
        }));
    };
}