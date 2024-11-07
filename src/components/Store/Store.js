import React from 'react';
import StoreSlides from './StoreSlides';

const styles = {
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px 0',
  },
  courseContainer: {
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '20px',
    margin: '0 10px',
    display: 'flex',
    alignItems: 'center',
  },
  courseTitle: {
    fontSize: '14px',
    color: '#666',
    marginTop: '10px',
  },
  courseImage: {
    width: '50px',
    height: '200px',
    borderRadius: '10px',
  },
};

const Store = (data) => {
  return (
    <div style={styles.courseContainer}>
      <h1 style={styles.heading}>Store</h1>
      <StoreSlides data={data}/>
    </div>
  );
};

export default Store;
