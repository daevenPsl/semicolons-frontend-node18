import logo from './logo.svg';
import './App.css';
import { IdentityViewPage } from './pages/IdentityViewPage/IdentityViewPage';
import { ClaimIssuerPage } from './pages/ClaimIssuerPage/ClaimIssuerPage';
import { ClaimCheckerPage } from './pages/ClaimCheckerPage/ClaimCheckerPage';
import { Login } from './pages/Login/Login';
import styles from './app.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const {parent}=styles;

function App() {
  return (
    <>
    
    <div className={parent} >
      <Routes>
              <Route exact path='/identityViewPage' element={<IdentityViewPage/>} />
              <Route exact path='/claimIssuerPage' element={<ClaimIssuerPage/>} />
              <Route exact path='/claimCheckerPage' element={<ClaimCheckerPage/>} />
              <Route path='/' element={<Login/>} />
      </Routes>
        {/* <IdentityViewPage/> */}
        {/* <Login/> */}
    </div>
    
    </>
  );
}

export default App;




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
