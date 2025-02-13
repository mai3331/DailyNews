import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import img1 from "../assets/daily-news-logo-vector.svg";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    // <nav className="navbar navbar-expand-lg  custom-navbar">
    //   <div className="container-fluid">
    //     {/* Brand Logo */}
    //     <a className="navbar-brand d-flex align-items-center" href="/">
    //       {"NEWS".split("").map((letter, index) => (
    //         <span
    //           key={index}
    //           style={{
    //             fontFamily: "serif",
    //             fontSize: "1rem",
    //             fontWeight: "bold",
    //             color: "white",
    //             backgroundColor: "darkred",
    //             border: "2px solid darkred",
    //             padding: "2px 4px",
    //             margin: "0 2px",
    //             display: "inline-block",
    //             textAlign: "center",
    //           }}
    //         >
    //           {letter}
    //         </span>
    //       ))}
    //     </a>

    //     {/* Navbar Toggler */}
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     {/* Collapsible Navbar Menu */}
    //     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/">Home</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/business">Business</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/health">Health</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/technology">Technology</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/science">Science</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/sports">Sports</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <div
      className="w-100  d-flex align-items-center justify-content-between px-4 responsive-height"
      style={{ height: "64px" , boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}
    >
      <div className=" d-flex align-items-center g-4">
        <img src={img1} alt="logo" style={{ width: "150px", height: "120px" }} />
        <span style={{ fontSize: "18px", fontWeight: "bold" }}></span>
      </div>
      <div className="d-md-none d-inline-flex">
        <div
          className="cursor-pointer"
          style={{ color: "black", fontSize: "25px", fontWeight: "bold" }}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "="}
        </div>
        <div
          className="w-100 h-100 d-flex flex-column align-items-center justify-content-center g-8 mb-3"
          style={{
            position: "absolute",
            top: "64px",
            right: open ? "0" : "100%",
            transition: "ease-in-out",
            fontSize: "32px",
            fontWeight: "bold",
            backgroundColor:"rgba(255, 255, 255, 0.3)",
            backdropFilter:"blur(10px)",
            WebkitBackdropFilter:'blur(10px)'
          }}
        >
          
          <Link
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
            className="mb-3 mt-3 link"
          >
            Home
          </Link>
          <Link
            to="/sports"
            style={{ textDecoration: "none", color: "inherit" }}
            className="mb-3 link nav-link"
          >
            sports
          </Link>
          <Link
            to="/science"
            style={{ textDecoration: "none", color: "inherit" }}
            className="mb-3 link"
          >
            science
          </Link>
          <Link
            to="/health"
            style={{ textDecoration: "none", color: "inherit" }}
            className="mb-3 link"
          >
            health
          </Link>
          <Link
            to="/business"
            style={{ textDecoration: "none", color: "inherit" }}
            className="mb-3 link"
          >
            business
          </Link>
          <Link
            to="/general"
            style={{ textDecoration: "none", color: "inherit" }}
            className="mb-3 link"
          >
            genral
          </Link>
          <Link>
            <button className="button-81">login</button>
          </Link>
        </div>
      </div>
      <div
        className="d-none d-md-flex justify-content-evenly me-auto my-5"
        style={{ color: "#999", fontSize: "25px"}}
      >
        <Link className="link " style={{ textDecoration: "none", color:"inherit" }}   to="/">Home</Link>
        <Link className="link"style={{ textDecoration: "none", color: "inherit" }}  to="/sports">Sports</Link>
        <Link className="link"style={{ textDecoration: "none", color: "inherit" }} to="/science">Science</Link>
        <Link className="link"style={{ textDecoration: "none", color: "inherit" }} to="/health">Health</Link>
        <Link className="link"style={{ textDecoration: "none", color: "inherit" }}  to="/business">Business</Link>
        <Link className="link"style={{ textDecoration: "none", color: "inherit" }} to="/general">General</Link>
        <SignedOut>
        <Link className="link-1 mt-0" style={{marginLeft:'650px'}} to="/login">
          <button className="button-81 ms-auto mt-0">Login</button>
        </Link>       
          </SignedOut>
      </div>
          <div className="ms-auto" style={{marginLeft:'30px',width:'100px'}}>
          <SignedIn className="link-1 mt-9" style={{marginLeft:'650px'}} >
            <UserButton />
          </SignedIn>

          </div>
    </div>
  );
};

export default Navbar;
