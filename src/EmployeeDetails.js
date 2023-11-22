import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const EmployeeDetails = () => {
  const [empData, setEmpData] = useState("");
  console.log("empData", empData);
  const { empid } = useParams();
  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="row">
        <div className=" offset-lg-3 col-lg-6 ">
          <div className="card bg-light mt-3">
            <h1>Employee Details</h1>

            <p>Name:{empData.name}</p>
            <p>Email:{empData.email}</p>
            <p>Phone:{empData.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
