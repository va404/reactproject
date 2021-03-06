import React, { Component } from 'react'
import '../../assets/bootstrap.min.css'
import { NavLink } from 'react-router-dom'


export default class CustomNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: sessionStorage.authtoken
        } 
    }

    logout = (props) => {
        
        this.setState({auth:false})
        sessionStorage.clear()
        
        
    }


    render() {
        const menuForGuests = <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" >
                        <NavLink className="nav-link" to="/news">Welcome</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signin">Sign In</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                    </li>
                </ul>
            </div>
         </nav>

         const menuForAuthenticated = <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="collapse navbar-collapse" id="navbarColor01">
             <ul className="navbar-nav mr-auto">
                 <li className="nav-item" >
                     <NavLink className="nav-link" to="/news">News</NavLink>
                 </li>
                 <li className="nav-item">
                     <NavLink className="nav-link" to="/create">Create Article</NavLink>
                 </li>
                 <li className="nav-item">
                     <NavLink className="nav-link" to={'/signin'} onClick={this.logout}>Logout</NavLink>
                 </li>
             </ul>
         </div>
     </nav>
      
        return (
            sessionStorage.authtoken  ?  menuForAuthenticated :  menuForGuests
        )
    }
}