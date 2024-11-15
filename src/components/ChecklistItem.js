import React, { useState } from 'react';

const ChecklistItem = ({label}) => {

    const [checked, setChecked] = useState();
    const styles = {
        checklistItem: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
        },
        checklistInput: {
          marginRight: '10px',
        },
      };
      

  return (
    <>
    { label ? (
    <li style={styles.checklistItem}>
        <input 
            style={styles.checklistInput}
            type='checkbox' 
            checked={checked} 
            onChange={() => setChecked(!checked)}
        >
            {label}
        </input>
    </li>
    ) : (
        <p style={{ color: '#888'}}>No items currently available</p>
    )}
    </>
  )
}

export default ChecklistItem