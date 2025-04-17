import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages";
import Books from "./Pages/books";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
