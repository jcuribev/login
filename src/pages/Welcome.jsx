import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

const Welcome = () => {

    const {state} = useLocation()
    const {cedula} = state

    return (
        <Fragment>
            <h2>Welcome {cedula}</h2>
        </Fragment>
        
    );
}

export default Welcome