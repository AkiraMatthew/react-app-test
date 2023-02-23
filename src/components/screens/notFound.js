import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <h3>Page Not Found</h3>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

export default NotFoundScreen