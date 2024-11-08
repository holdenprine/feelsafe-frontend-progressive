import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
    moduleCardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '10px',
    },
    card: {
      backgroundColor: '#fff',
      margin: '10px',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '300px',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'contain',
      marginBottom: '5px',
    },
    moduleTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '5px',
    },
    description: {
      fontSize: '14px',
      color: '#666',
    },
  };



const ModuleCard = ({data}) => {

  const navigate = useNavigate();

  const handleClick = (moduleTitle) => {
    navigate('/coursesmodule')
  }
  return (
    <div style={styles.moduleCardContainer}>
      {data.map((item) => (
        <div key={item.moduleTitle} style={styles.card} onClick={() => handleClick(item.moduleTitle)}>
          <img
            src={item.image}
            alt={item.moduleTitle}
            style={styles.image}
          />
          <h3 style={styles.moduleTitle}>{item.moduleTitle}</h3>
          <p style={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ModuleCard;
