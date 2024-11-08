import React from 'react';
const styles = {
  card: {
    width: '300px',
    height: '140px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    marginTop: '20px',
    marginBottom: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '200px',
    height: '100px',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
};



const StoreSlides = ({data}) => {
  console.log(data);
  return (
    <div>
    {data ? (
      data.map((item) => (
        <div key={item.id} style={styles.card}>
          <img src={item.image} alt={item.title} style={styles.image} />
          <h3 style={styles.title}>{item.title}</h3>
        </div>
      ))
    ) : (
      // Handle the case where data is undefined or empty
      <p>No data available</p> 
    )}
  </div>
  );
};

export default StoreSlides;
