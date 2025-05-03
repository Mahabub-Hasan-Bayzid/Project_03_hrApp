import React from "react";
import './AddEmployee.css';
import { useState } from "react";


const AddEmployee = ({onAddEmployee}) => {
    const [formData, setFromdata]= useState({
        name: "",
        title: "",
        salary: "",
        phone: "",
        email: "",
        animal: "",
        startDate: "",
        location: "",
        department: "",
        skills: ""
    });

    const handleChange=(event)=>{
        const {name,value} = event.target;
        setFromdata((prev)=> ({...prev, [name]: value}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const newEmployee = {
            ...formData,
            salary: parseFloat(formData.salary),
            startDate: new Date(formData.startDate).toLocaleDateString(),
            skills: formData.skills.split(",").map(skill => skill.trim())
            
        }
            onAddEmployee(newEmployee);
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

    }
    
    return(
        <>
        <div className="form-container">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} required />
          <input name="salary" placeholder="Salary" value={formData.salary}  onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input name="animal" placeholder="Favorite Animal" value={formData.animal}  onChange={handleChange} required />
          <input type="date" name="startDate" onChange={handleChange} required />
          <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
          <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
          <input name="skills" placeholder="Skills (comma separated)" value={formData.skills}  onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn">Add Employee</button>
      </form>
    </div>
        </>
    )
}

export default AddEmployee;