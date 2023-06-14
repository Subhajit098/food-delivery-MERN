import React from 'react'
import {Link} from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">FoodyWorld</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/createuser">Signup</Link>
      </li>
     </ul>
  </div>
</nav>






























//     <div>
//     <nav classNameName="navbar navbar-expand-lg navbar-dark bg-light">
//   <div classNameName="container-fluid">
//     <Link classNameName="navbar-brand fst-italic" to="/">FoodWorld </Link>
//     <button classNameName="navbar-toggler" type="button" data-bs-toggle="dropdown" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span classNameName="navbar-toggler-icon"></span>
//     </button>
//     <div classNameName="collapse navbar-collapse" id="navbarNav">
//       <ul classNameName="navbar-nav">
//         <li classNameName="nav-item dropdown">
//           <Link classNameName="nav-link" aria-current="page" to="/">Home </Link>
//         </li>
//         <li classNameName="nav-item">
//           <Link classNameName="nav-link" to="/login">Login </Link>
//         </li>
//         <li classNameName="nav-item">
//           <Link classNameName="nav-link" to="/createuser">SignUp </Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

//     </div>
  )
}
