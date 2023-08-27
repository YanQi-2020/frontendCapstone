import React, { FC } from 'react';


interface HomeTableReservationProps {}

const HomeTableReservation: FC<HomeTableReservationProps> = () => (
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
  <button type="button" className="btn btn-primary mt-5">Check Out</button>
  </div>

);

export default HomeTableReservation;