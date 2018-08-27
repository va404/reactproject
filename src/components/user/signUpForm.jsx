import React, { Component } from 'react'
// import observer from '../../infrastructure/observer'
import requester from '../../infrastructure/requester'

export default class SignUpForm extends Component {
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
        console.log(this.state)
        this.setState({ [fieldName]: fieldValue })

    }

    handleSubmit = event => {
        event.preventDefault()
        requester.post('user', '', 'basic', this.state)
            .then(res => {
                this.props.history.push('/signin')
            }).catch(err => {
                console.log(err)
            });

    }

    render() {
        return (

            <div className="offset-4 text-center">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-sm-6 ">
                        <label  htmlFor="username">Username</label>
                        <input type="password" className="form-control" id="username" placeholder="Username" />
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                        <label htmlFor="exampleInputPassword1"> Repeat Password</label>
                        <input type="password" className="form-control " id="repeatPassword" placeholder="Repeat Password" />
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Sign Un</button>
                        </div>
                    </div>

                </form>
            </div>

        )
    }
}