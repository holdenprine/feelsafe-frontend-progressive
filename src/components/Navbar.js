import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaBarsProgress } from 'react-icons/fa6';
import { FaTshirt } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';


const Navbar = () => {
  const navigate = useNavigate();
  const styles = {
    navbar: {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-around',
      borderBottom: '1px solid #ddd',
    },
    navList: {
      listStyle: 'none',
      display: 'flex',
      padding: 0,
    },
    navItem: {
      padding: '10px 20px',
      cursor: 'pointer',
    },
    activeNavItem: {
      color: 'blue',
      fontWeight: 'bold',
    },
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <FaHome />
          <span>Home</span>
        </li>
        <li style={{ ...styles.navItem, ...styles.activeNavItem }}>
          <FaBarsProgress />
          <span>Progress</span>
        </li>
        <li style={styles.navItem}>
          <FaTshirt />
          <span>Merch</span>
        </li>
        <li style={styles.navItem}>
          <IoSettingsSharp />
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
