import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import './assets/bootstrap.min.css';
import SignInForm from './components/user/signInFrom';
import CustomNav from './components/common/header';
import ListNews from './components/news/listNews';
import SignUpForm from './components/user/signUpForm';
import CreateArticle from './components/news/create';
import ArticleDetails from './components/news/articleDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNav />
       
        <Switch>
          <Route path="/news" exact component={ListNews} />
          <Route path="/signin" exact component={SignInForm} />
          <Route path="/signup" exact component={SignUpForm} />
          <Route path="/create" exact component={CreateArticle} />
          <Route path="/article/:id" exact component={ArticleDetails} />

        </Switch>
          
        
       
        
      </div>
    );
  }
}

export default App;
