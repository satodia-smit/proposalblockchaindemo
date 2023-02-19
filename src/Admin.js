import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [textBoxValue, setTextBoxValue] = useState('');

  const handleTextBoxChange = (event) => {
    setTextBoxValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Text box value: ${textBoxValue}`);
  };

  return (
    <div className="admin-container">
      <h1>ADMIN</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <label htmlFor="textbox">Text Box:</label>
        <input
          type="text"
          id="textbox"
          name="textbox"
          value={textBoxValue}
          onChange={handleTextBoxChange}
        />
        <button className="admin-button">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
