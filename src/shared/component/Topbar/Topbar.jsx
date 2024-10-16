import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import logo from '../../../assets/logo.svg';

export default function Topbar() {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue !== "") {
      return navigate(`/search?q=${inputValue}`);
    } else {
      return navigate(`/`);
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark "
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)', // Adjust the blur value as needed
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000 // Ensure the navbar is on top of other content
        }}
      >
        <div className="container-fluid py-2">
          <Link className="navbar-brand" to="/">
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              <img src={logo} alt="logo" className="img-fluid me-2" width={60} height={60} />
              Movie Stack
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav justify-content-center">
              <Link className="nav-link" to="/">
                Popular
              </Link>
              <Link className="nav-link" to="movies/top">
                Top Rated
              </Link>
              <Link className="nav-link" to="movies/upcoming">
                Upcoming
              </Link>
            </div>
            <form className="d-flex ms-auto" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Movie name"
                value={inputValue}
                onChange={handleInputChange}
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
