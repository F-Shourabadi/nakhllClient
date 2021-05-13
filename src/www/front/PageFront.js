import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styles from './../../styles/styles.pcss'
import { Switch, Route, HashRouter, NavLink, useRouteMatch } from 'react-router-dom';

let Menu = () => {

    const { url, path } = useRouteMatch();
    return (
        <div>
            <ul>
                <li>
                    <NavLink exact to={`${path}`} activeClassName={styles.active}>Homepage</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to={'/contact'}>Contact</NavLink>
                </li>
            </ul>
        </div>
    );
}

let Homepage = () => {
    console.log('object')
    return (
        <div className={styles.component}>
            <Helmet title="Homepage" />
            {/* <Menu /> */}
            <h1>Homepage</h1>
        </div>
    );
}

let About = () => {
   
    return (
        <div>
            <Helmet title="About us" />
            {/* <Menu /> */}
            <h1>About</h1>
        </div>
    );
}

let Contact = () => {
    return (
        <div>
            <Helmet title="Contact us" />
            {/* <Menu /> */}
            <h1>Contact</h1>
        </div>
    );
}

let PageFront = (props) => {

    const { url, path } = useRouteMatch();
    console.log(`path`, path) 
    console.log(`url`, url) 

console.log(props)
    return (
            <Switch>
                <Route path={`${path}`} render={(props) => <Homepage />} />
                <Route path={`${path}/:about/`} render={(props) => <About />} />
                <Route path='/contact' render={(props) => <Contact />} />
            </Switch>
    )
}

export { PageFront };
