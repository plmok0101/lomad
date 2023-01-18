import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function TestLick(props) {
    return (
        <Fragment>
            <Link to="/app2"><h1>라우팅</h1></Link>
        </Fragment>
    );
}

export default TestLick;