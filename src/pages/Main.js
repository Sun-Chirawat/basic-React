import { useNavigate } from "react-router-dom";

const Main = () => {
    const products = [
        {"id": 100, "name": "shirt", "price": 200},
        {"id": 101, "name": "shoe", "price": 500},
    ];

    const navigate = useNavigate();
    return (
        <>
            <h1>Main</h1>
            <button onClick={() => navigate('/about', {state: products[1]})}>about</button>
        </>        
    );
}
 
export default Main;