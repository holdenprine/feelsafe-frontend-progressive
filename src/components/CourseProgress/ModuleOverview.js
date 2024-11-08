import React from 'react';
import ModuleCard from './ModuleCard';
import { useNavigate } from 'react-router-dom';

const styles = {
  safeArea: {
    backgroundColor: '#fff',
    padding: '10px',
  },
  scrollViewContent: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  courseName: {
    fontSize: '24px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '700',
    marginTop: '20px',
    marginBottom: '4px',
    color: '#333',
  },
  cardContainer: {
    paddingBottom: '25px',
  },
  navButton: {
    backgroundColor: '#5F6D46',
    padding: '15px',
    margin: '30px 20px',
    borderRadius: '10px',
    textAlign: 'center',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans-serif',
    cursor: 'pointer',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
  },
  navButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textDecoration: 'none',
  }
};

const feelSafeCourseData = [
    { moduleTitle: 'Awareness', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 1, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
    { moduleTitle: 'Defense', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 2, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
    { moduleTitle: 'What to Do?', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 3, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
    { moduleTitle: 'Training', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 4, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
    { moduleTitle: 'Review', image: 'https://picsum.photos/200', videoContent: 'placeholder', moduleNumber: 5, courseName: 'Feel Safe Online', description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure beatae perferendis blanditiis magni excepturi harum enim ipsa consequuntur placeat voluptatum quas quam, neque ab nostrum vel suscipit, culpa doloribus.', isCompleted: false },
]

const ModuleOverview = () => {
  


  const navigate = useNavigate();
  const courseNames = [...new Set(feelSafeCourseData.map((item) => item.courseName))];

  return (
    <div style={styles.safeArea}>
      <div style={styles.scrollViewContent}>
        <div style={styles.container}>
          {courseNames.map((name, index) => (
            <h2 key={index} style={styles.courseName}>{name}</h2>
          ))}
        </div>
        <div style={styles.cardContainer}>
          <ModuleCard data={feelSafeCourseData}/>
        </div>
        <button
          style={styles.navButton}
          onClick={() => navigate('/')}
        >
          <span style={styles.navButtonText}>Back To Home</span>
        </button>
      </div>
    </div>
  );
};

export default ModuleOverview;
