// import { useState } from "react";
// import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
    const { state } = useLocation();
    // const [product, setProduct] = useState(null);
    // setProduct(state);

    // console.log(state.name);
    // useEffect(() => {
    //     if(state !== null) {
    //         setProduct(state);
    //     }
    // }, [state]);

    return (
        <>
            <h1>About</h1>
            {/* <h3>{state.name}</h3> */}
            {state.name == null ? <h3>No product</h3> : <h3>{state.name}</h3>}
            {state.name != null && <h3>{state.name}</h3>}
        </>
    );
}

export default About;