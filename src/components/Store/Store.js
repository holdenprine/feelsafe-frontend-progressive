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

const Store = () => {

  const storeData = [
    { 
        title: 'Product 1', 
        image: 'https://picsum.photos/200',
        id: 1 
    },
    { 
        title: 'Product 2', 
        image: 'https://picsum.photos/200',
        id: 2, 
    },
    { 
        title: 'Product 3', 
        image: 'https://picsum.photos/200',
        id: 3, 
    },
    { 
        title: 'Product 4', 
        image: 'https://picsum.photos/200',
        id: 4, 
    }
];

  return (
    <div style={styles.courseContainer}>
      <h1 style={styles.heading}>Store</h1>
      <StoreSlides data={storeData || []}/>
    </div>
  );
};

export default Store;
