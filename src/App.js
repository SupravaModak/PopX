import React from 'react';
   import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
   import WelcomePage from './WelcomePage';
   import CreateAccount from './CreateAccount';
   import Login from './Login';
   import AccountSettings from './AccountSettings';
   import './styles.css';

   const App = () => {
       return (
           <Router>
               <Routes>
                   <Route path="/" element={<WelcomePage />} />
                   <Route path="/create-account" element={<CreateAccount />} />
                   <Route path="/login-account" element={<Login />} />
                   <Route path="/account-account" element={<AccountSettings />} />
               </Routes>
           </Router>
       );
   };

   export default App;