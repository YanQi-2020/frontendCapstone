// import React, { FC } from 'react';
// import meal from '../assets/images/meal.jpg';
// import HomeTableReservation from './Home/tableReservation/Home/tableReservation.tsx';


// const Layout = ({ children }) => {
//   return (
//     <div>
//          <img src={meal} alt="Logo" width="300" height="240" className="d-inline-block align-text-top"/>
//       <main>{children}</main>
//     </div>
//   );
// };

// export default Layout;

import React, { FC } from 'react';
import meal from '../assets/images/meal.jpg';
import HomeTableReservation from './Home/tableReservation/Home/tableReservation.tsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
  <div>
        <img src={meal} alt="Logo" width="300" height="240" className="d-inline-block align-text-top"/>
    <Outlet/>
  </div>

);};

export default Layout;