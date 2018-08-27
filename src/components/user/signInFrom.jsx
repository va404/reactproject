import React, { Component } from 'react'
import requester from '../../infrastructure/requester'

export default class SignInForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleInputChange = event => {
        let fieldName = event.target.name
        let fieldValue = event.target.value

        this.setState({ [fieldName]: fieldValue })

    }

    handleSubmit = event => {
        event.preventDefault()
        requester.post('user', 'login', 'basic', this.state)
            .then(res => {
                console.log(res)
                sessionStorage.setItem('authtoken', res._kmd.authtoken)
                
                this.props.history.push('/news')
            });

    }

    render() {
        return (
          
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group  col-md-4">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="form-control " id="username" placeholder="Username" onChange={this.handleInputChange} />
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control " id="password" placeholder="Password" onChange={this.handleInputChange} />
                        <br/>
                        <input type="submit" className="btn btn-primary" value="Sign In" />
                    </div>
                </form>
            
        )
    }
}