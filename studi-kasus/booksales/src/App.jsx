import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book-open fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4">BookStore</span>
            </Link>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2">Home</Link></li>
            <li><Link to="/book" className="nav-link px-2">Book</Link></li>
            <li><Link to="/team" className="nav-link px-2">Team</Link></li>
            <li><Link to="/contact" className="nav-link px-2">Contact</Link></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>
      </div>

      {/* Routing Content */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          {/* Placeholder jika nanti kamu buat halaman Book */}
          <Route path="/book" element={<Book/>} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
