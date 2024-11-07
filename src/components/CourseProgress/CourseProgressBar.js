import React from 'react';

const CourseProgressBar = ({ data }) => {
  const labels = data.map(item => item.moduleTitle);
  const courseName = data.length > 0 ? data[0].title : "Course Name";
  const currentPosition = 1; // replace with dynamic value if available

  // Styles for each step
  const indicatorStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
    },
    courseNameContainer: {
        backgroundColor: '#f3f3f3', // Light background for contrast
        padding: '12px 24px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
        marginBottom: '20px',
        maxWidth: '80%',
        textAlign: 'center',
      },
      courseNameText: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333', // Darker text color for readability
      },
    stepContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    step: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      marginBottom: '10px',
    },
    stepIndicator: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      zIndex: 1,
    },
    separator: {
      position: 'absolute',
      top: '20px', // center line with respect to step indicators
      left: '50%',
      width: '4px',
      height: '50px',
      backgroundColor: '#aaaaaa',
      zIndex: 0,
    },
    label: {
      marginTop: '10px',
      fontSize: '15px',
    },
  };

  return (
    <div style={indicatorStyles.container}>
        <div style={indicatorStyles.courseNameContainer}>
            <h2 style={indicatorStyles.courseNameText}>{courseName}</h2>
        </div>
      {labels.map((label, index) => (
        <div key={index} style={indicatorStyles.step}>
          <div
            style={{
              ...indicatorStyles.stepIndicator,
              backgroundColor: index < currentPosition ? '#fe7013' : '#ffffff',
              color: index < currentPosition ? '#ffffff' : '#aaaaaa',
              border: `4px solid ${index === currentPosition ? '#fe7013' : '#aaaaaa'}`,
              fontSize: index === currentPosition ? '20px' : '15px',
            }}
          >
            {index + 1}
          </div>
          {index < labels.length - 1 && <div style={indicatorStyles.separator}></div>}
          <span style={indicatorStyles.label}>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default CourseProgressBar;
