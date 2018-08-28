import React, { Component } from 'react';
import { Route, Router} from 'react-router-dom'
import './assets/bootstrap.min.css';
import SignInForm from './components/user/signInFrom';
import CustomNav from './components/common/header';
import ListNews from './components/news/listNews';
import SignUpForm from './components/user/signUpForm';
import CreateArticle from './components/news/create';
import ArticleDetails from './components/news/articleDetails';
import EditArticle from './components/news/edit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNav />
       
    
          <Route exact path="/news"  component={ListNews} />
          <Route exact path="/signin"  component={SignInForm} />
          <Route exact path="/signup"  component={SignUpForm} />
          <Route exact path="/create"  component={CreateArticle} />
          <Route exact path="/article/:id"  component={ArticleDetails} />
          <Route exact path="/edit/:id"  component={EditArticle} />

    
          
        
       
        
      </div>
    );
  }
}

export default App;
