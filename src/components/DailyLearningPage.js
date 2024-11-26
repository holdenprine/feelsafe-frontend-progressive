import React from "react";
import ChecklistItem from "./ChecklistItem";

function DailyLearningPage() {
  const checklist = [
    "Watch",
    "Take Quiz",
    "Earn Points towards Your Badge",
    "Dig Deeper with More Topics",
    "Share Feel Safe with a Friend",
  ];

  const styles = {
    dailyLearningPage: {
      padding: "20px",
      maxWidth: "800px", // Optional: Constrain width for better presentation
      margin: "0 auto",
      textAlign: "center",
    },
    videoSection: {
      marginBottom: "30px",
    },
    videoWrapper: {
      display: "inline-block",
      border: "1px solid #ddd",
      padding: "10px",
    },
    videoTitle: {
      fontSize: "14px",
      marginTop: "10px",
    },
    checklistSection: {
      marginTop: "20px",
    },
    checklistList: {
      display: "flex",
      flexDirection: "column", // Stack items vertically
      alignItems: "center", // Center items horizontally
      justifyContent: "center", // Center items vertically if needed
      listStyle: "none",
      padding: "0",
    },
    checklistHeading: {
      fontWeight: "bold",
      marginBottom: "10px",
    },
  };
  
  return (
    <div style={styles.dailyLearningPage}>
    {/* Video Section */}
    <section style={styles.videoSection}>
      <h2>Daily Learning Hub</h2>
      <h3>The Anticipation Spiral</h3>
      <div style={styles.videoWrapper}>
        <video controls>
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={styles.videoTitle}>The Impact of Environmental Stress</div>
      </div>
    </section>

    {/* Checklist Section */}
    <section style={styles.checklistSection}>
        <h4 style={styles.checklistHeading}>Daily Steps Checklist</h4>
        <ul style={styles.checklistList}>
          {checklist.map((item, index) => (
            <ChecklistItem key={index} label={item} />
          ))}
        </ul>
      </section>
  </div>
  );
}

export default DailyLearningPage;
