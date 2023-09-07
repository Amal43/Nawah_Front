import React from 'react';
import FarmarProfileSide from '../Components/FarmerProfile/FarmarProfileSide';
import FarmHeader from '../Components/FarmerProfile/FarmHeader';
import Nav from '../Components/NavBar/Navbar';


function FarmarPage() {

  return (
    <>

      <section dir="rtl">

          <Nav/>
       
          <FarmarProfileSide />


        {/* </div> */}
      </section>
    </>
  )
}

export default FarmarPage
