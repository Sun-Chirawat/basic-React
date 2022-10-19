import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <h1>Sorry! This page is not found</h1>
            {/* <a href="/">Return to home page</a> */}
            <Link to="/">Return to home page</Link>
        </>
    );
}

export default Error;