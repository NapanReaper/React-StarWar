import React from 'react'

const Navbar = ({ setPage }) => {

 return (
  <div>
   <nav>
    <button onClick={() => setPage('planets')}>Planet</button>
    <button onClick={() => setPage('people')}>People</button>
   </nav>
  </div>
 )
}

export default Navbar
