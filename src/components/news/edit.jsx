import React, { Component } from 'react'
import requester from '../../infrastructure/requester'

export default class EditArticle extends Component {
    id = this.props.match.params.id
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

    getArticle = () => {
        requester.get('appdata', `articles/${this.id}`, 'kinvey').then(res => this.setState({
            heading: res.heading,
            body: res.body
        }))
    }

    componentDidMount = () => {
        this.getArticle()

    }

    handleSubmit = (event) => {
            event.preventDefault()
            requester.update('appdata', `articles/${this.id}`, 'kinvey', this.state)
            .then(res => {
                this.props.history.push('/news')
            });
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group  col-md-4 offset-4">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" name="heading" className="form-control"   value={this.state.heading}  onChange={this.handleInputChange} />
                    <label htmlFor="heading">Body</label>
                    <input type="text" name="body" className="form-control"  value={this.state.body} onChange={this.handleInputChange} />
                
                    <br/>
                    <input type="submit" className="btn btn-primary" value="Edit article" />
                </div>
            </form>
        )
    }
}