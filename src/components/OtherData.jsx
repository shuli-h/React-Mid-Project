import React, { useState } from "react";

export const OtherData = ({ address }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const shouldShow = isHovered || isExpanded;

  return (
    <div style={{ marginTop: "10px" }}>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleToggle}
        style={{
          color: "blue",
          cursor: "pointer",
          textDecoration: "underline",
          display: "inline-block",
        }}
      >
        Other Data
      </button>

      {shouldShow && (
        <div
          style={{
            marginTop: "10px",
            backgroundColor: "#f9f9f9",
            padding: "10px",
            border: "1px solid #ddd",
          }}
        >
          <p>
            <strong>Street:</strong> {address.street}
          </p>
          <p>
            <strong>City:</strong> {address.city}
          </p>
          <p>
            <strong>Zip Code:</strong> {address.zipcode}
          </p>
        </div>
      )}
    </div>
  );
};
