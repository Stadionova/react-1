import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
// import Header from './Header';
// import Header from './Header.js';
// import Footer from './Footer';
// import Technologies from './Technologies';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
      {/* auto import подключён, 
      то есть сверху не нужно вручную писать import,
      достаточно тут тег написать через auto import */}
    </div>
  );
}

// function App() {
//   // название функции APP - это значит, что у нас есть тег <App />
//   // который мы можем куда-нибудь вставить
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           React_proj <code>src/App.js</code> and save to reload.
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
