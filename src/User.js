import React, { useState } from "react";
import "./User.css";

function User() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(selectedFile);
  };

  const handleConnectToWallet = () => {
    window.alert("Connecting to wallet...");
  };

  return (
    <div className="user-container">
      <h1>USER</h1>
      <form className="user-form" onSubmit={handleFormSubmit}>
        <button className="user-button" onClick={handleConnectToWallet}>
          Connect to Wallet
        </button>

        <label htmlFor="file-input">Select a file to upload:</label>
        <div className="file-input">
          <input
            type="file"
            id="file-input"
            onChange={handleFileSelect}
            accept=".jpg,.jpeg,.png,.pdf"
            required
          />
        </div>

        <button type="submit" className="user-button">
          Submit
        </button>
        <button className="user-vote-button">Vote</button>
      </form>
    </div>
  );
}

export default User;
