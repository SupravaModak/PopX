import React from 'react';
import profileImage from './profile1.jpg'
import './styles3.css';

   const AccountSettings = () => {
     return (
       <div className="account-settings">
         <div className="user-info">
            <img src={profileImage} alt='Profile' className='profile-image'/>
           <h1>Account Settings</h1>
           <p>Name : Suprava Modak</p>
           <p>Email : modaksuprava.74@gmail.com</p>
         </div>
         <div className="content">
           <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing</p>
           <p>Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut</p>
           <p>Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
         </div>
       </div>
     );
   };

   export default AccountSettings;