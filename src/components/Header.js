import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mdMoreVert } from 'react-icons/md';

const Header = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    // to handle clicking off the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }      
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // remove event listener on cleanup
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <div style={styles.container}>
        <div style={styles.rightSection}>
            <button onClick={()=> navigate('/')} style={styles.logoButton}>
                <img
                    // change after assets folder imported
                    src={require('../logo.svg')}
                    alt='Logo'
                    style={styles.logo}
                />
            </button>
            <button onClick={toggleDropdown} style={styles.dropdownMenu}>
                <mdMoreVert size={24} color='#E2CF03'/>
            </button>
        </div>
        { dropdownVisible && (
            <div ref={dropdownRef} style={styles.dropdownMenu}>
                <p style={styles.menuItem}>Home</p>
                <p style={styles.menuItem}>About</p>
                <p style={styles.menuItem}>Courses</p>
                <p style={styles.menuItem}>Store</p>
                <p style={styles.menuItem}>Contact</p>
                <p style={styles.menuItem}>Settings</p>
            </div>
        )}

    </div>
  )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
    },
    logoButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    logo: {
        width: '50px', // adjust size as needed
        height: '50px',
        objectFit: 'cover',
    },
    dropdownButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        marginLeft: '10px',
    },
    dropdownMenu: {
        position: 'absolute',
        top: '60px', // adjust position as needed
        right: '10px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    menuItem: {
        padding: '8px 0',
        cursor: 'pointer',
    }
};

export default Header