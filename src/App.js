// import logo from './logo.svg';
// import List from "./list"
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  let date = new Date();
  let message;
  if (date.getHours() >= 1 && date.getHours() <= 11) {
    message = "Good Morning";
  } else if (date.getHours() >= 12 && date.getHours() <= 19) {
    message = "Good Afternoon";
  } else {
    message = "Good Night";
  }
  return <span className="userMessage">{message}</span>;
}

export default App;
