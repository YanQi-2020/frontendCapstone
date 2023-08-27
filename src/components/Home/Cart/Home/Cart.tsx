import React, { FC } from 'react';
import { useNavigate} from 'react-router-dom';


interface HomeCartProps {}

const HomeCart: FC<HomeCartProps> = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/payment');
  };
  return(
  <div>
    <h2>HomeCart Component</h2>
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
<div className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Total</div>
      
    </div>
    <div><label className="form-control">100</label></div>
  </div>
  <button type="button" onClick={handleClick} className="btn btn-primary mt-5">
  Pay
</button>
  </div>
  );
  
}

export default HomeCart;
