import React from 'react'
import { useHistory } from 'react-router-dom';

const PageFrontPanel = ({component}) => {

    const Component = component;

    let history = useHistory();
    const handleLogOut = (e) => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('user');
            history.push('/app');
        }
    }
    return (
        <div style={{ display: "flex", height: "100vh", alignItems: "stretch" }}>
            
            <div style={{ flex: 0.1, backgroundColor: "#f2f2f2" }}>

                <button onClick={handleLogOut}>Log Out</button>
            </div>
            <div>
                <Component />
            </div>
        </div>

    )
}

export default PageFrontPanel
