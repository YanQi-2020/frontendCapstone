import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { updateSharedData } from '../../../../store';

interface HomeTableReservationProps {}


const HomeTableReservation: FC<HomeTableReservationProps> = () =>{

  const sharedData = useSelector((state:any) => state.sharedData.sharedData);
  const dispatch = useDispatch();
  // alert(sharedData);
  // dispatch(updateSharedData('Updated Data'));
  // alert(sharedData);


  const navigate = useNavigate();
const handleClick = () => {



  navigate('/cart');
};

 return (
  <div>
    <h2>Reserve Your Tables</h2>
  <div>
  <ol className="list-group list-group-numbered">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">2-Persons Table</div>
      20$
    </div>
    <div><input className="form-control" type="date" ></input></div>
    <div><input className="form-control" type="time" ></input></div>
    <div><input className="form-control" type="number" ></input></div>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">4-Persons Table</div>
      40$
    </div>
    <div><input className="form-control" type="date" ></input></div>
    <div><input className="form-control" type="time" ></input></div>
    <div><input className="form-control" type="number" ></input></div>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">6-Persons Table</div>
      60$
    </div>
    <div><input className="form-control" type="date" ></input></div>
    <div><input className="form-control" type="time" ></input></div>
    <div><input className="form-control" type="number" ></input></div>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">8-Persons Table</div>
      80$
    </div>
    <div><input className="form-control" type="date" ></input></div>
    <div><input className="form-control" type="time" ></input></div>
    <div><input className="form-control" type="number" ></input></div>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">10-Persons Table</div>
      100$
    </div>
    <div><input className="form-control" type="date" ></input></div>
    <div><input className="form-control" type="time" ></input></div>
    <div><input className="form-control" type="number" ></input></div>
  </li>
</ol>
  </div>
  <button type="button" onClick={handleClick} className="btn btn-primary mt-5">
  Add to Cart
</button>

  </div>

);
 }

export default HomeTableReservation;
