import React, { FC } from 'react';
import meal from '../../assets/images/meal.jpg';
import HomeTableReservation from './tableReservation/Home/tableReservation.tsx';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div>
    <img src={meal} alt="Logo" width="300" height="240" className="d-inline-block align-text-top"/>
    <HomeTableReservation/>
  </div>
);

export default Home;
