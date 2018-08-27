import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import './assets/bootstrap.min.css';
import SignInForm from './components/user/signInFrom';
import CustomNav from './components/common/header';
import ListNews from './components/news/listNews';
import SignUpForm from './components/user/signUpForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNav />
       
         <Route path="/news"  component={ListNews} />
          <Route path="/signin"  component={SignInForm} />
          <Route path="/signup"  component={SignUpForm} />
       
        
      </div>
    );
  }
}

export default App;
