import React from 'react'

const EarnBadgePage = () => {
    const styles = {
        badgePage: {
          padding: '20px',
        },
        header: {
          textAlign: 'center',
          marginBottom: '20px',
        },
        backButton: {
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          position: 'absolute',
          left: '10px',
          top: '10px',
        },
        headerTitle: {
          fontSize: '1.8rem',
          margin: 0,
          color: '#28a745',
        },
        headerParagraph: {
          fontSize: '1rem',
          color: '#555',
        },
        badgeSection: {
          textAlign: 'center',
        },
        badgeImage: {
          width: '150px',
          height: 'auto',
          margin: '10px 0',
        },
        knowledgeList: {
          listStyle: 'none',
          padding: 0,
          margin: '10px auto',
          textAlign: 'left',
          maxWidth: '300px',
        },
        knowledgeListItem: {
          margin: '5px 0',
        },
        resourceList: {
          listStyle: 'none',
          padding: 0,
          margin: '10px auto',
          textAlign: 'left',
          maxWidth: '300px',
        },
        resourceListItem: {
          margin: '5px 0',
        },
        progressButton: {
          backgroundColor: '#28a745',
          color: '#fff',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '15px',
        },
      };

  return (
    <div style={styles.badgePage}> 
    <div style={styles.header}> 
        <button style={styles.backButton}>&larr;</button> 
        <h2 style={styles.headerTitle}>CONGRATULATIONS!</h2> 
        <p style={styles.headerParagraph}>You've Earned a Badge!</p> 
    </div> 
    <div style={styles.badgeSection}> 
        <img src="awareness-badge-url.png" alt="Awareness Badge" style={styles.badgeImage} /> 
        <h3>Now you know:</h3> 
        <ul style={styles.knowledgeList}> 
            <li style={styles.knowledgeListItem}>one thing</li> 
            <li style={styles.knowledgeListItem}>two things</li> 
            <li style={styles.knowledgeListItem}>three things</li> 
        </ul> 
        <h4>Ready to learn more?</h4> 
        <p>Check out these topics:</p> 
        <ul style={styles.resourceList}> 
            <li style={styles.resourceListItem}>link one</li> 
            <li style={styles.resourceListItem}>link two</li> 
            <li style={styles.resourceListItem}>resource 3</li> 
        </ul> 
        <button style={styles.progressButton}>See Your Progress &rarr;
        </button> 
    </div> 
    </div>
  )
}

export default EarnBadgePage