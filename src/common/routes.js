import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import Login from './pages/login'
import Index from './pages/index'

const routes =(
    <Router>
        <div>
          <Route  path="/index" component={Index}></Route>
          <Route  path="/login" component={Login}></Route>
          <Route exact path="/" render={()=>{
            if(localStorage.getItem('name')){
                return <Redirect to="/index"></Redirect>
              }else {
                return <Redirect to="/login"></Redirect>
              }
          }}></Route>
          {/*<Redirect from="*" to="/login"></Redirect>*/}
        </div>
      </Router>
)
export default routes;