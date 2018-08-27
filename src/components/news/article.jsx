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

        return (
     
                <div className="list">
                    <div className="card text-white bg-primary   col-sm-6  offset-3">
                    <div className="card-header">{this.props.heading}</div>
                    <div className="card-body">
                        <p className="card-text">{this.props.body}</p>
                    </div>
                    <br/>
                    <Link to={'/news'} className="btn btn-info">Details</Link>
                    <br/>
                </div>
                    <hr className="col-md-6" />
                </div>
              
            
        )
    }
}