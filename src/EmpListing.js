import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const EmpListing = () => {
  const navigate = useNavigate();
  const [empInfo, setEmpInfo] = useState([]);
  console.log("empInfo", empInfo);

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpInfo(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  
  const handleEdit = (id) => {
    navigate("/employee/edit/" + id);
  };

  const handleDetails = (id) => {
    navigate("/employee/detail/" + id);
  };

  const handleRemove = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("removed successfully");
          window.location.reload();
        })

        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-title">
            <h2>Employee Listing</h2>
          </div>

          <div className="card-body">
            <div className="divbtn">
              <Link to="employee/create" className="btn btn-success">
                Add New (+)
              </Link>
            </div>

            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Phone</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {empInfo &&
                  empInfo.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                        <a
                          onClick={() => {
                            handleEdit(item.id);
                          }}
                          className="btn btn-info"
                        >
                          Edit
                        </a>
                        <a
                          onClick={() => {
                            handleRemove(item.id);
                          }}
                          className="btn btn-danger"
                        >
                          Remove
                        </a>
                        <a
                          onClick={() => {
                            handleDetails(item.id);
                          }}
                          className="btn btn-primary"
                        >
                          Details
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpListing;
