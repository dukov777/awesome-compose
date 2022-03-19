import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState();
  // const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });
  useEffect(() => {
    fetch("/api/clicks/")
      .then(res => res.json())
      .then(res => res.clicks.map(msg => msg.click).toString())
      .then(res => {
        setMessage(res); 
        console.log(res);})
      .catch(console.error);
    }, [setMessage]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message || "Loading..."}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );

  // return (
  //   <div>
  //     <p>You clicked {clicks} times</p>
  //     <button onClick={() => setMessage(clicks + 1)}>
  //       Click me
  //     </button>
  //   </div>
  // );
}

// function App() {
//   const [message, setMessage] = useState();
//   useEffect(() => {
//     fetch("/api/")
//       .then(res => res.json())
//       .then(res => setMessage(res.message))
//       .catch(console.error);
//   }, [setMessage]);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{message || "Loading..."}</p>
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

export default App;
