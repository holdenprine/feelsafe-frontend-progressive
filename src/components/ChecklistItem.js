import React, { useState } from "react";

const ChecklistItem = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const styles = {
    checklistItem: {
      display: "flex", // Flexbox for alignment
      alignItems: "center", // Vertically align contents
      justifyContent: "flex-start", // Align contents to the left
      marginBottom: "10px", // Space between items
      padding: "5px 0", // Optional: Add vertical spacing for readability
    },
    checklistInput: {
      marginRight: "10px", // Space between checkbox and label
    },
  };

  return (
    <>
      {label ? (
        <li style={styles.checklistItem}>
          <input
            style={styles.checklistInput}
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span>{label}</span>
        </li>
      ) : (
        <p style={{ color: "#888" }}>No items currently available</p>
      )}
    </>
  );
};

export default ChecklistItem;
