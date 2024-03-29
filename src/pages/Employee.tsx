import { useState, useEffect } from "react";
import Axios from "axios";

import AddModal from "../components/AddModal";
import EditModal from "../components/EditModal";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [offices, setOffices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editUser, setEditUser] = useState<any>({});
  const [reload, setReload] = useState(0);

  useEffect(() => {
    const ourRequest = Axios.CancelToken.source();
    const fetchPost = async () => {
      try {
        const response = await Axios.get("/employees", {
          cancelToken: ourRequest.token,
        });
        setEmployees(response.data);
        const responseOffices = await Axios.get("/offices", {
          cancelToken: ourRequest.token,
        });
        setOffices(responseOffices.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
    return () => {
      ourRequest.cancel();
    };
  }, [reload]);

  return (
    <>
      {showModal && (
        <AddModal setReload={setReload} setShowModal={setShowModal} />
      )}
      {showEditModal && (
        <EditModal
          editUser={editUser}
          setReload={setReload}
          setShowEditModal={setShowEditModal}
        />
      )}
      <div className="bg-blue-500 w-full h-14 p-8 items-center flex">
        <h1 className="text-white font-bold text-2xl">
          Employee and Office Management
        </h1>
      </div>
      <div className="container mx-auto mt-6">
        <div className=" text-right mb-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-500 hover:bg-green-600 duration-300 transition-all ease-in-out text-white font-semibold py-2 px-4 rounded"
          >
            + Add
          </button>
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mb-4">Employee's Table</h1>
        </div>
        <table
          cellPadding={20}
          className="text-center h-auto w-full border border-black"
        >
          <thead className="border border-black">
            <tr>
              <th>Employee Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Extension</th>
              <th>Email</th>
              <th>Office Code</th>
              <th>Reports To</th>
              <th>Job Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee: any) => (
              <tr key={employee.employeeNumber}>
                <td>{employee.employeeNumber}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.extension}</td>
                <td>{employee.email}</td>
                <td>{employee.officeCode}</td>
                <td>{employee.reportsTo}</td>
                <td>{employee.jobTitle}</td>
                <td>
                  <button
                    onClick={async () => {
                      setEditUser({
                        employeeNumber: employee.employeeNumber,
                        lastName: employee.lastName,
                        firstName: employee.firstName,
                        extension: employee.extension,
                        email: employee.email,
                        officeCode: employee.officeCode,
                        reportsTo: employee.reportsTo,
                        jobTitle: employee.jobTitle,
                      });
                      setShowEditModal(true);
                    }}
                    className="mr-4 bg-blue-400 hover:bg-blue-600 duration-300 transition-all ease-in-out text-white font-bold py-2 px-4 rounded"
                  >
                    &#9998;
                  </button>
                  <button
                    onClick={async () => {
                      try {
                        const response = await Axios.delete(
                          `employees/${employee.employeeNumber}`
                        );
                        console.log(response.data);
                        setReload((prev) => prev + 1);
                      } catch (e) {
                        console.log(e);
                      }
                    }}
                    className="bg-red-400 hover:bg-red-600 duration-300 transition-all ease-in-out text-white font-bold py-2 px-4 rounded"
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-10">
          <h1 className="text-2xl font-bold mb-4">Office's Table</h1>
        </div>
        <table className="text-center h-auto w-full border border-black">
          <thead className="border border-black">
            <tr>
              <th>Office Code</th>
              <th>City</th>
              <th>Phone</th>
              <th>Address Line 1</th>
              <th>Address Line 2</th>
              <th>State</th>
              <th>Country</th>
              <th>Postal Code</th>
              <th>Territory</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {offices.map((office: any) => (
              <tr key={office.officeCode}>
                <td>{office.officeCode}</td>
                <td>{office.city}</td>
                <td>{office.phone}</td>
                <td>{office.addressLine1}</td>
                <td>{office.addressLine2}</td>
                <td>{office.state}</td>
                <td>{office.country}</td>
                <td>{office.postalCode}</td>
                <td>{office.territory}</td>
                <td>
                  <button
                    // onClick={async () => {
                    //   setEditUser({
                    //     employeeNumber: office.employeeNumber,
                    //     lastName: office.lastName,
                    //     firstName: office.firstName,
                    //     extension: office.extension,
                    //     email: office.email,
                    //     officeCode: office.officeCode,
                    //     reportsTo: office.reportsTo,
                    //     jobTitle: office.jobTitle,
                    //   });
                    //   setShowEditModal(true);
                    // }}
                    className="mr-4 bg-blue-400 hover:bg-blue-600 duration-300 transition-all ease-in-out text-white font-bold py-2 px-4 rounded"
                  >
                    &#9998;
                  </button>
                  <button
                    onClick={async () => {
                      try {
                        const response = await Axios.delete(
                          `offices/${office.officeCode}`
                        );
                        console.log(response.data);
                        setReload((prev) => prev + 1);
                      } catch (e) {
                        console.log(e);
                      }
                    }}
                    className="bg-red-400 hover:bg-red-600 duration-300 transition-all ease-in-out text-white font-bold py-2 px-4 rounded"
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Employee;
