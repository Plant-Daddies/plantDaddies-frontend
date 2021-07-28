import React from "react";
import NavBar from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

const Nav = ()=>{
    return(
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">User</a>
            </li>
        </ul>
    );
}

export default Nav