import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [registeredUser, setRegisteredUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [registerForm, setRegisterForm] = useState({ email: "", password: "" });
  const [registerErrors, setRegisterErrors] = useState({});

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  const validateRegister = () => {
    const errors = {};
    if (!registerForm.email) {
      errors.email = "Email wajib diisi.";
    } else if (!/\S+@\S+\.\S+/.test(registerForm.email)) {
      errors.email = "Format email tidak valid.";
    }

    if (!registerForm.password) {
      errors.password = "Password wajib diisi.";
    } else if (registerForm.password.length < 4) {
      errors.password = "Password minimal 4 karakter.";
    }

    return errors;
  };

const handleRegister = (e) => {
  e.preventDefault();
  const errors = validateRegister();
  setRegisterErrors(errors);

  if (Object.keys(errors).length === 0) {
    const userData = {
      email: registerForm.email,
      password: registerForm.password,
    };

    // Simpan data pengguna ke local storage
    localStorage.setItem('registeredUser ', JSON.stringify(userData));

    setRegisterForm({ email: "", password: "" });
    bootstrap.Modal.getInstance(document.getElementById("registerModal")).hide();
    alert("Registrasi berhasil! Silakan login.");
  }
};

const handleLogin = (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Ambil data pengguna dari local storage
  const storedUser  = JSON.parse(localStorage.getItem('registeredUser '));

  if (
    storedUser  &&
    email === storedUser .email &&
    password === storedUser .password
  ) {
    setIsLoggedIn(true);
    setLoginError("");
    bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
  } else {
    setLoginError("Email atau password salah, atau belum register.");
  }
};

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">📚 BookStore</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/book">Books</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/team">Team</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              </ul>
              <ul className="navbar-nav">
                {isLoggedIn ? (
                  <>
                    <li className="nav-item text-white nav-link">👋 {registeredUser.email}</li>
                    <li className="nav-item">
                      <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <button className="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>

        {/* ROUTING */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* FOOTER */}
        <Footer />

        {/* MODAL LOGIN */}
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="loginEmail" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="loginPassword" required />
                  </div>
                  {loginError && <div className="alert alert-danger">{loginError}</div>}
                  <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL REGISTER */}
        <div className="modal fade" id="registerModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Register</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleRegister}>
                  <div className="mb-3">
                    <label htmlFor="regEmail" className="form-label">Email</label>
                    <input
                      type="email"
                      className={`form-control ${registerErrors.email ? "is-invalid" : ""}`}
                      id="regEmail"
                      name="email"
                      value={registerForm.email}
                      onChange={handleRegisterChange}
                      required
                    />
                    {registerErrors.email && <div className="invalid-feedback">{registerErrors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="regPassword" className="form-label">Password</label>
                    <input
                      type="password"
                      className={`form-control ${registerErrors.password ? "is-invalid" : ""}`}
                      id="regPassword"
                      name="password"
                      value={registerForm.password}
                      onChange={handleRegisterChange}
                      required
                      minLength={4}
                    />
                    {registerErrors.password && <div className="invalid-feedback">{registerErrors.password}</div>}
                  </div>
                  <button type="submit" className="btn btn-success w-100">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
