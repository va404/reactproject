import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import requester from '../../infrastructure/requester'

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: []
        }

    }
   
    render() {
        const adminView = <div>
            <div className="list">
                <div className="card text-white bg-primary   col-sm-6  offset-3">
                    <div className="card-header">{this.props.heading}</div>
                    <div className="card-body">
                        <p className="card-text">{this.props.body}</p>
                    </div>
                    <br />
                    <Link to={'/news'} className="btn btn-info  col-sm-4 offset-4 mt-1">Details</Link>
                    <button className="btn btn-info  col-sm-4 offset-4  mt-1">Edit</button>
                    <button className="btn btn-info col-sm-4 offset-4  mt-1" onClick={this.deleteArticle}>Delete</button>
                    <br />
                </div>

                <hr className="col-md-6" />
            </div>
           
        </div>
        const userView = <div className="list">
            <div className="card text-white bg-primary   col-sm-6  offset-3">
                <div className="card-header">{this.props.heading}</div>
                <div className="card-body">
                    <p className="card-text">{this.props.body}</p>
                </div>
                <br />
                <Link to={'/news'} className="btn btn-info">Details</Link>
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