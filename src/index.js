import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
let p1Style = {
  padding: "10px",
  backgroundColor: "navy",
  borderRadius: "7px",
  boxShadow: "0 0 4px 2px #333",
  fontWeight: "700",
  fontSize: "29px"
}

ReactDOM.render(
  <React.StrictMode>
    <p style={p1Style}>Hello Sir, <App /> </p>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();