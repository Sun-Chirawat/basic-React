import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Add from "./Add-fruit";
import Main from "./App-Fruits2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<Add />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;