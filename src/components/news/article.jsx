import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import requester from '../../infrastructure/requester'

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: undefined
        }

    }
    deleteArticle = (event) => {
        requester.remove('appdata', 'articles/', this.props._id, 'kinvey')


    }




    render() {



        return (
            <div className="card text-white bg-primary   col-sm-6  offset-3 mt-2 mb-2">
                <div className="card-header">
                    {this.props.heading}
                </div>
                    <div className="card-body">
                        <p className="card-text">{this.props.body}</p>
                    </div>
                    <br />
                       
               
                <hr className="col-md-6"/>
            </div>
        )
    }
}