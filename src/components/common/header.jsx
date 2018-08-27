import React, { Component } from 'react'
import '../../assets/bootstrap.min.css'
import { NavLink, Redirect } from 'react-router-dom'
import observer from '../../infrastructure/observer'
import requester from '../../infrastructure/requester'


export default class CustomNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: null,
            auth: this.isAuth
        }
     
    }
    userLoggedIn = username => {
        this.setState({ username })
    }


    isAuth = () => {
        if (sessionStorage.getItem('authtoken')) {
            
            return true
        }
        return false
        observer.trigger(observer.events.loginUser, this.isAuth)
       
        
    }
    logout = () => {
        requester.post('user', '_logout', 'kinvey')
        .then(res => {
            sessionStorage.removeItem('authtoken')
           
        });
        
        return <Redirect to="/news"/>
    }

   componentDidUpdate() {
        this.setState(this.auth = this.isAuth)
   }

    render() {
        const menuForGuests = <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" >
                        <NavLink className="nav-link" to="news">Welcome</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="signin">Sign In</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="signup">Sign Up</NavLink>
                    </li>
                </ul>
            </div>
         </nav>

         const menuForAuthenticated = <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="collapse navbar-collapse" id="navbarColor01">
             <ul className="navbar-nav mr-auto">
                 <li className="nav-item" >
                     <NavLink className="nav-link" to="news">News</NavLink>
                 </li>
                 <li className="nav-item">
                     <NavLink className="nav-link" to="create">Create Article</NavLink>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link" onClick={this.logout}>Logout</a>
                 </li>
             </ul>
         </div>
     </nav>
        return (

               this.isAuth  ?  menuForAuthenticated :  menuForGuests
        )
    }
}