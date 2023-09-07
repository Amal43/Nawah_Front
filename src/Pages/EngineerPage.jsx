import React from 'react'
import EngineerHeader from '../Components/EngineerProfile/EngineerHeader'
import EngineerProfileSide from '../Components/EngineerProfile/EngineerProfileSide'
import Nav from '../Components/NavBar/Navbar';

function EngineerPage() {
  return (
    <>

      <section dir="rtl">
        <Nav/>
        <EngineerHeader />
        <EngineerProfileSide />


        {/* </div> */}
      </section>
    </>
  )
}

export default EngineerPage