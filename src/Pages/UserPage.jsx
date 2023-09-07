import React from 'react'
import UserProfileSide from '../Components/UserProfile/UserProfileSide';
import UserHeader from '../Components/UserProfile/UserHeader';
import Nav from '../Components/NavBar/Navbar';


function UserPage() {

  return (
    <>
     
      
      <section dir="rtl">

          <Nav/>
       
          <UserProfileSide/>


        
      </section>
    </>
  )
}

export default UserPage