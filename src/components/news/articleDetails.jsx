import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import requester from '../../infrastructure/requester'

export default class ArticleDetails extends Component {

     id = this.props.match.params.id
    constructor(props) {
        super(props)
        this.state = {
            article: {}
        }
    }
    deleteArticle = () => {
        requester.remove('appdata', `articles/${this.id}`, 'kinvey')
            .then(res =>  this.props.history.push('/news'))
            .catch(err => console.log(err))
    }

    getArticle = () => {
        requester.get('appdata', `articles/${this.id}`, 'kinvey').then(res => this.setState({article: res}))
    }

    componentDidMount = () => {
        this.getArticle()

         
    }

    render () {

        const adminView = <div>
        <div className="list">
            <div className="card text-white bg-primary   col-sm-6  offset-3">
                <div className="card-header">{this.state.article.heading}</div>
                <div className="card-body">
                    <p className="card-text">{this.state.article.body}</p>
                </div>
                <br />
                {/* <Link to={`/article/${this.props._id}`} className="btn btn-info">Details</Link> */}
                <Link to={`/edit/${this.id}`} className="btn btn-info  col-sm-4 offset-4  mt-1">Edit</Link>
                <button className="btn btn-info col-sm-4 offset-4  mt-1" onClick={this.deleteArticle}>Delete</button>
                <br />
            </div>

            <hr className="col-md-6" />
        </div>
       
    </div>
    const userView = <div className="list">
        <div className="card text-white bg-primary   col-sm-6  offset-3">
            <div className="card-header">{this.state.article.heading}</div>
            <div className="card-body">
                <p className="card-text">{this.state.article.body}</p>
                
            </div>
            <br />
            <Link to={'/news'} className="btn btn-info">Go Back</Link>
            <br />
        </div>
        <hr className="col-md-6" />

    </div>
    return (
        <div>
            {sessionStorage.getItem('userRole') === 'admin' ? adminView : userView}
        </div>
    )
    }
}