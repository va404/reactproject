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
            <div className="card text-white bg-primary  col-sm-12  mt-2 mb-2">
                <div className="card-header">
                    <h2> {this.props.heading}</h2>
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