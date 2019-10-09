import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
// import Header from './Header';
// import Header from './Header.js';
// import Footer from './Footer';
// import Technologies from './Technologies';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    // всё наше приложение нужно обрамить тегом:
    // Route теги мы можем использовать только внутри компоненты BrowserRouter
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/* создаём вторую страничку Messages
      поэтому пока закоментила Profile страничку
      и создаю новую Dialogs */}
        <div className='app-wrapper-content'>
          {/* передаю названия компонент для первого и второго route */}
          {/* решение, какую компоненты отрисовать, будет принято в зависимости от урла в браузерной строке */}
          {/* то есть нужно как-то этот урл анализировать */}
          {/* в данный момент отрисовались обе страницы */}
          {/* чтобы этого не было нужно указать путь path для каждого Route */}
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          {/* <Profile /> */}
          {/* <Dialogs /> */}
        </div>
        {/* auto import подключён, 
      то есть сверху не нужно вручную писать import,
      достаточно тут тег написать через auto import */}
      </div>
    </BrowserRouter>
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
