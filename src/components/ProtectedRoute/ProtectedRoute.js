import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({...props}) => {

  let properties = props.properties;
  return (
    <Route>
      {
        () => props.Agreed
        ? props.components.map((elem, index)=>{
            let props = {};
            for (var key in properties[index]) {
                props[String(key)]=properties[index][key];
            }
            return React.createElement(elem, props);
          })
        : <Redirect path="/signin" />
      }
    </Route>
)}

export default ProtectedRoute;