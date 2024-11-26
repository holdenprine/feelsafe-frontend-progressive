import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
import { FaTshirt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const styles = {
    navbar: {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      position: "fixed", // Fixes the navbar in place
      bottom: 0, // Sticks it to the bottom of the viewport
      left: 0,
      width: "100%", // Ensures it spans the full width of the screen
      boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)", // Optional: Adds a shadow for better visibility
    },
    navList: {
      listStyle: "none",
      display: "flex",
      padding: 0,
      margin: 0,
      width: "100%",
      justifyContent: "space-around",
    },
    navItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      fontSize: "14px", // Optional: Adjust font size for labels
    },
    activeNavItem: {
      color: "blue",
      fontWeight: "bold",
    },
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem} onClick={() => navigate('/')}>
          <FaHome />
          <span>Home</span>
        </li>
        <li style={{ ...styles.navItem, ...styles.activeNavItem }} onClick={()=> navigate('/progress')}>
          <FaBarsProgress />
          <span>Progress</span>
        </li>
        <li style={styles.navItem}>
          <FaTshirt />
          <span>Merch</span>
        </li>
        <li style={styles.navItem} onClick={()=> navigate('/settings')}>
          <IoSettingsSharp />
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
