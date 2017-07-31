import React from 'react'; //import React package
import ReactDOM from 'react-dom'; //import ReacrDOM package

// using the render method, we will mount this node into our DOM (html file) on the element with 
// id of 'app'

ReactDOM.render(
  <div> HelloWorld </div>,
  document.getElementById('app')
);
