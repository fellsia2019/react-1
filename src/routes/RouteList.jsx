import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

class RouteList extends Component {
  
  render() {
    return (
      <Routes>
        {this.props.routes.map(route => 
           <Route
            key={route.path}
            path={route.path}
            element={route.component}
          ></Route>
        )}
      </Routes>
    );
  }
}

export default RouteList;
