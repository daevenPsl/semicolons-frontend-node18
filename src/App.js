import logo from './logo.svg';
import './App.css';
import { IdentityViewPage } from './pages/IdentityViewPage/IdentityViewPage';
import { ClaimIssuerPage } from './pages/ClaimIssuerPage/ClaimIssuerPage';
import { ClaimCheckerPage } from './pages/ClaimCheckerPage/ClaimCheckerPage';
import { Login } from './pages/Login/Login';
import styles from './app.module.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from "react-query";
import {BUNDLER_URL} from '../src/config/Config';

console.log("test Bundler =====>"+BUNDLER_URL);

const {parent}=styles;

const darkTheme = createTheme({
   palette: {
     mode: 'dark',
   },
 });

function App() {

  const queryClient =new QueryClient();

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <QueryClientProvider client={queryClient}>
    <div className={parent} >
      <Routes>
              <Route exact path='/identityViewPage' element={<IdentityViewPage/>} />
              <Route exact path='/claimIssuerPage' element={<ClaimIssuerPage/>} />
              <Route exact path='/claimCheckerPage' element={<ClaimCheckerPage/>} />
              <Route path='/' element={<Login/>} />
      </Routes>
    </div>
    </QueryClientProvider>
    </ThemeProvider>
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
