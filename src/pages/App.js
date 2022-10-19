import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Main from "./Main";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;