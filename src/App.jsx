import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import './assets/bootstrap.min.css';
import SignInForm from './components/user/signInFrom';
import CustomNav from './components/common/header';
import ListNews from './components/news/listNews';
import SignUpForm from './components/user/signUpForm';
import CreateArticle from './components/news/create';
import Article from './components/news/article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNav />
       
         <Route path="/news" exact component={ListNews} />
          <Route path="/signin" exact component={SignInForm} />
          <Route path="/signup" exact component={SignUpForm} />
          <Route path="/create" exact component={CreateArticle} />
          
        
       
        
      </div>
    );
  }
}

export default App;
