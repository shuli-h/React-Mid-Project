import React from "react";

export const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: "8px",
        marginTop: "0",
        width: "250px",
        fontSize: "16px",
      }}
    />
  );
};
