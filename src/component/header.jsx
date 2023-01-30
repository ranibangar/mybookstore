import React from "react";
import Navbar from "./Navbar";
import "../App.css"
import SearchForm from "../SearchForm/SearchForm"

const Header = () => {
    return (
        <div className="holder">
            <header className="header">
            <Navbar />
            <div className="header-content flex flex-c text-center text-white">
               <h2 className="header-title text-capitalize">
find your book of choice
               </h2><br />
               <p className="header-text fs-18" fw-3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ab similique odit nostrum tenetur. Magni!
               </p>
               <SearchForm />
            </div>
            </header>
            </div>
    )
}
export default Header;
