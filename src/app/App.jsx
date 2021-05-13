import React, { useEffect } from 'react';
import Helmet from "react-helmet";
// import { JwtDecode } from '../util/jwtUtil/JwtDecode';
import { Www } from '../www';
import "./../languages/translate/I18Next"
import { increment } from '../redux/counter/Actions';

const App = () => {

    useEffect(() => {

    }, [])

    return (
        <div>
            <Helmet
                htmlAttributes={{ lang: "en", amp: undefined }} // amp takes no value
                titleTemplate="my app - %s"
                titleAttributes={{ itemprop: "name", lang: "en" }}
                meta={[
                    { name: "description", content: "Server side rendering example" },
                    { name: "viewport", content: "width=device-width, initial-scale=1" },
                ]}
                link={[{ rel: "stylesheet", href: "/dist/styles.css" }]}
            />
            <Www />
        </div>
    )
}

export default App;