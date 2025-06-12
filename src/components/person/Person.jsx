import React from "react";
import Person from "./PersonCard";
import "./PersonList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation } from "react-router";

const PersonList = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [editEmployee, setEditEmployee] = useState([employeeData]);

  const location = useLocation();
  useEffect(() => {
    const id = location.state?.scrollToId;
    if (id) {
      const el = document.getElementById(`employee-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("highlight");
      }
    }
  }, [location.state]);
  useEffect(() => {
    axios
      .get("https://backend-hr-app-66cx.onrender.com/employees/")
      .then((res) => setEmployeeData(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handledelete = (id) => {
    axios
      .delete("https://backend-hr-app-66cx.onrender.com/employees" + id)
      .then(() => {
        setEmployeeData((prev) =>
          prev.filter((employee) => employee.id !== id)
        );
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Employee deleted successfully!",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          background: "#1e1e2f",
          color: "#f8f8f8",
          iconColor: "#00f2fe",
          customClass: {
            popup: "swal2-toast-custom",
          },
        });
      });
  };
  const handleEdit = (employee) => {
    Swal.fire({
      title: `
        <div class="sw-head">
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" class="sw-icon" />
          <span>Edit Employee</span>
        </div>
      `,
      html: `
        <div class="sw-body">
          <input id="sw-name" class="sw-input" placeholder="Name" value="${employee.name}">
          <input id="sw-title" class="sw-input" placeholder="Title" value="${employee.title}">
          <input id="sw-salary" class="sw-input" placeholder="Salary" value="${employee.salary}">
          <input id="sw-phone" class="sw-input" placeholder="Phone" value="${employee.phone}">
          <input id="sw-email" class="sw-input" placeholder="Email" value="${employee.email}">
          <input id="sw-location" class="sw-input" placeholder="Location" value="${employee.location}">
          <input id="sw-dept" class="sw-input" placeholder="Department" value="${employee.department}">
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "sw-popup",
        confirmButton: "sw-confirm",
        cancelButton: "sw-cancel",
      },
      preConfirm: () => {
        const name = document.getElementById("sw-name").value;
        const title = document.getElementById("sw-title").value;
        const salary = document.getElementById("sw-salary").value;
        const phone = document.getElementById("sw-phone").value;
        const email = document.getElementById("sw-email").value;
        const location = document.getElementById("sw-location").value;
        const department = document.getElementById("sw-dept").value;

        if (!name || !title || !email) {
          Swal.showValidationMessage("Name, Title, and Email are required.");
          return false;
        }

        return {
          name,
          title,
          salary,
          phone,
          email,
          location,
          department,
        };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = result.value;
        axios
          .put(
            `https://backend-hr-app-66cx.onrender.com/employees/${employee.id}`,
            {
              ...employee,
              ...updated,
            }
          )
          .then((res) => {
            setEmployeeData((prev) =>
              prev.map((emp) => (emp.id === employee.id ? res.data : emp))
            );
            Swal.fire({
              toast: true,
              position: "top-end",
              icon: "success",
              title: "Employee updated!",
              showConfirmButton: false,
              timer: 2200,
              background: "#f0faff",
              color: "#1c6cd5",
              iconColor: "#4a90e2",
            });
          });
      }
    });
  };

  return (
    <>
      <div className="app">
        <main className="person-grid">
          {employeeData.map((employee) => (
            <Person
              key={employee.id}
              name={employee.name}
              title={employee.title}
              salary={employee.salary}
              phone={employee.phone}
              email={employee.email}
              location={employee.location}
              department={employee.department}
              animal={employee.animal}
              startDate={employee.startDate}
              onHandleDelete={() => handledelete(employee.id)}
              onHandleEdit={() => handleEdit(employee)}
            />
          ))}
        </main>
      </div>
    </>
  );
};

export default PersonList;
