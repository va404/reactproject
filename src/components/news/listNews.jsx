import React, { Component } from 'react'
import requester from '../../infrastructure/requester'
import Article from './article';
import '../../App.css'

export default class ListNews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }

    getArticles = () => {
        requester.get('appdata', 'articles', 'kinvey').then(res => this.setState({ articles: res }))
    }
    componentDidMount = () => {
        this.getArticles()
    }
    render() {
        return (
            <div>
                
                <section id="viewCatalog">
                    {this.state.articles.map((p) => <Article key={p._id} {...p} />)}
                </section>
            </div>
        )
    }
}