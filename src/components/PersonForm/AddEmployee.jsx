import React from "react";
import "./AddEmployee.css";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [formData, setFromdata] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromdata((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = {
      ...formData,
      salary: parseFloat(formData.salary),
      startDate: new Date(formData.startDate).toLocaleDateString(),
      skills: formData.skills.split(",").map((skill) => skill.trim()),
    };
    axios
      .post("https://backend-hr-app-66cx.onrender.com/employees/", newEmployee)
      .then((res) => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Employee added successfully!",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          background: "#fff",
          color: "#333",
          iconColor: "#00f2fe",
          customClass: {
            title: "swal-title",
          },
        });

        setFromdata({
          name: "",
          title: "",
          salary: "",
          phone: "",
          email: "",
          animal: "",
          startDate: "dd.mm.yyyy",
          location: "",
          department: "",
          skills: "",
        });

        // ✅ Use ID returned from server
        navigate("/employees", {
          state: { scrollToId: res.data.id },
        });
      });
  };

  return (
    <>
      <div className="form-container">
        <h2>Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="title"
              placeholder="Job Title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <input
              name="salary"
              type="number"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <select
              name="animal"
              className="opt"
              value={formData.animal}
              onChange={handleChange}
              required
            >
              <option value="">Select Favorite Animal</option>
              <option value="Owl">🦉 Owl</option>
              <option value="Fox">🦊 Fox</option>
              <option value="Cat">🐱 Cat</option>
              <option value="Bear">🐻 Bear</option>
              <option value="Dog">🐶 Dog</option>
              <option value="Rabbit">🐰 Rabbit</option>
              <option value="Lion">🦁 Lion</option>
              <option value="Eagle">🦅 Eagle</option>
              <option value="Horse">🐴 Horse</option>
              <option value="Panda">🐼 Panda</option>
            </select>

            <input
              type="date"
              name="startDate"
              onChange={handleChange}
              required
            />
            <input
              name="location"
              type="text"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <input
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
              required
            />
            <input
              name="skills"
              placeholder="Skills (comma separated)"
              value={formData.skills}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Add Employee
          </button>
        </form>
      </div>
    </>
  );
};

export default AddEmployee;
