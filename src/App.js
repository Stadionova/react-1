import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './Header';
// // import Header from './Header.js';
// import Footer from './Footer';
// import Technologies from './Technologies';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src='http://5nak.com/img/epic-1.png'></img>
      </header>
      <nav className='nav'>
        <div><a>Profile</a></div>
        <div><a>Message</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className="content"><img src="https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg"></img></div>
      {/* auto import подключён, 
      то есть сверху не нужно вручную писать import,
      достаточно тут тег написать через auto import */}
      {/* <Technologies /> */}
      {/* <Header /> */}
      {/* <Technologies /> */}
      {/* <Footer /> */}
      {/* <Footer /> */}
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
