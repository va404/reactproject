import React, { Component } from 'react'
import requester from '../../infrastructure/requester'
export default class CreateArticle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            heading: '',
            body: ''
        }
    }


    handleInputChange = event => {
        let fieldName = event.target.name
        let fieldValue = event.target.value

        this.setState({ [fieldName]: fieldValue })

    }

    handleSubmit = event => {
        event.preventDefault()
        requester.post('appdata', 'articles', 'kinvey', this.state)
            .then(res => {

                this.props.history.push('/news')
            });

    }

    render () {

        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <div className="form-group  col-md-4 offset-4">
                        <label htmlFor="heading">Heading</label>
                        <input type="text" name="heading" className="form-control " id="heading" placeholder="heading" onChange={this.handleInputChange} />
                        <label htmlFor="exampleInputPassword1">Article body</label>
                        <textarea className="form-control" name="body" id="exampleTextarea" rows="5" onChange={this.handleInputChange} />
                        <br/>
                        <input type="submit" className="btn btn-primary offset-4" value="Add article" />
                    </div>
                </form>
            </div>
        )
    }
}