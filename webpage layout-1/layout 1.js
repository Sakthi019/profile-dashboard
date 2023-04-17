import React, {useState,useEffect} from "react";
import "./layout.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export function Layout1(){
    const[profile,setProfile]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/project_layout_1.json') 
        .then(data=>data.json())
        .then(da=>setProfile(da))
    })

    return(
        <>
        {/* Menu bar */}
        <div className="container-fluid bg-navimg">
        <nav class="navbar navbar-expand-lg navbar-light bg-light bg-trans">
            <a class="navbar-brand" href="#">LOGO</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item"><button class="btn btn-danger m-2 my-sm-0" type="submit">Find Candidates</button></li>
                <li class="nav-item"><a class="nav-link text-light" href="#">Find Jobs</a></li>
                <li class="nav-item"><a class="nav-link text-light">Find Companies</a></li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <FontAwesomeIcon icon={faBell} className="text-light siz px-lg-2"/>
                <input class="btn btn-outline-light my-2 my-sm-0 mx-lg-2" type="button" value="login"/>
                <button class="btn btn-danger my-2 my-sm-0 mx-lg-2" type="submit">Register</button>
            </form>
            </div>
        </nav>
        {/* Header */}
        <div className="container py-5">
            <h1 className="text-center text-danger pt-lg-5 pb-lg-3">Find the candidates as per your requirements</h1>
            <div className="cent pb-lg-5">
                <div className="row bg-light p-2 justify-content-center w-75 bord">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="p-2 siz"/>
                    <input class="form-control mr-sm-2 col-lg-4 nonline rightline" type="search" placeholder="Job Title / Keyword"/>
                    <h3 className="d-lg-inline d-none">|</h3>
                    <FontAwesomeIcon icon={faLocationDot}  className="p-2 siz"/>
                    <input class="form-control mr-sm-2 col-lg-4 nonline" type="search" placeholder="Add Country / City"/>
                    <button class="btn btn-danger my-2 px-5 my-sm-0" type="submit">Search</button>
                </div>
            </div>
        </div>
        </div>
        
        {/* Main / Body */}
        <div className="container-fluid">
            <div className="row justify-content-around py-4">
            <div class="dropdown">{/* Dropdown 1 */}
                <button class="btn btn-outline-danger dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">Experience</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">{/* Dropdown 2 */}
                <button class="btn btn-outline-danger dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">HTML/CSS</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">{/* Dropdown 3 */}
                <button class="btn btn-outline-danger dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">Bangalore</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">{/* Dropdown 4 */}
                <button class="btn btn-outline-danger dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">UI/UX Designer</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">{/* Dropdown 5 */}
                <button class="btn btn-outline-danger dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">Gender</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div class="dropdown">{/* Dropdown 6 */}
                <button class="btn btn-outline-danger dropdown-toggle px-lg-5" type="button" data-toggle="dropdown" aria-expanded="false">Age</button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            </div>
        </div>
        {/* Cards */}
        <div className="container-fluid">
            <div className="row p-lg-5 text-center posrel">
            {profile.map((value,index)=>
                <>
            <div className="p-3 col-lg-3">
                <div className="card">
                    <img src={value.img} className="card-img-top"/>
                    <FontAwesomeIcon icon={faBookmark} className="bookmark text-danger"/>
                    <div className="card-body">
                        <h5 className="card-title">{value.name}</h5>
                        <p className="card-text">{value.position}</p>
                        <a href="#" className="btn btn-danger">VIEW</a>
                    </div>
                </div>        
            </div>
            </>)
            }
            </div>
            <div className="text-center">
                <h6>See all results</h6>
                <FontAwesomeIcon icon={faAngleDown}/>
            </div>
        </div>
        </>
    );
}