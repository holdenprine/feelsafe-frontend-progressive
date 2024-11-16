import React from "react";

function ProgressPathPage() {
  const styles = {
    progressPathPage: {
      padding: "20px",
      textAlign: "center",
    },
    header: {
      display: "flex",
      justifyContent: "space-evenly",
      marginBottom: "20px",
    },
    tabButton: {
      backgroundColor: "white",
      border: "1px solid #ddd",
      padding: "10px 20px",
      borderRadius: "20px",
      cursor: "pointer",
      fontSize: "1rem",
    },
    tabButtonActive: {
      backgroundColor: "#007bff",
      color: "white",
      fontWeight: "bold",
    },
    heading: {
      fontSize: "1.5rem",
      margin: "20px 0",
    },
    progressMap: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      margin: "30px 0",
    },
    node: {
      position: "relative",
    },
    star: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#ddd",
    },
    starCompleted: {
      backgroundColor: "#28a745",
    },
    starIncomplete: {
      backgroundColor: "#ddd",
      border: "2px solid #000",
    },
    badge: {
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      backgroundColor: "#f4f4f4",
      border: "2px solid #ddd",
      fontSize: "0.8rem",
    },
    badgeHighlighted: {
      backgroundColor: "#ffc107",
      border: "2px solid #ffeb3b",
    },
    tooltip: {
      position: "relative",
    },
    tooltipText: {
      visibility: "hidden",
      width: "180px",
      backgroundColor: "black",
      color: "white",
      textAlign: "center",
      borderRadius: "6px",
      padding: "5px",
      position: "absolute",
      top: "-40px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 1,
    },
    tooltipHover: {
      visibility: "visible",
    },
    lessonButton: {
      backgroundColor: "#28a745",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      fontSize: "1rem",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.progressPathPage}>
      <div style={styles.header}>
        <button style={{ ...styles.tabButton, ...styles.tabButtonActive }}>Progress Path</button>
        <button style={styles.tabButton}>Certificates</button>
      </div>

      <h2 style={styles.heading}>Jane, Here's Your Progress!</h2>

      <div style={styles.progressMap}>
        <div style={{ ...styles.node, ...styles.tooltip }}>
          <div style={{ ...styles.star, ...styles.starCompleted }}></div>
          <span style={styles.tooltipText}>Re-watch "Grab a slice and Get Smart"</span>
        </div>

        <div style={styles.node}>
          <div style={{ ...styles.star, ...styles.starCompleted }}></div>
        </div>

        <div style={styles.node}>
          <div style={{ ...styles.star, ...styles.starIncomplete }}></div>
        </div>

        <div style={styles.node}>
          <div style={{ ...styles.star, ...styles.starCompleted }}></div>
        </div>

        <div style={styles.node}>
          <div style={styles.badge}>Pressure Points</div>
        </div>

        <div style={styles.node}>
          <div style={{ ...styles.badge, ...styles.badgeHighlighted }}>Awareness</div>
        </div>
      </div>

      <button style={styles.lessonButton}>Go to Your Daily Lesson &rarr;</button>
    </div>
  );
}

export default ProgressPathPage;
