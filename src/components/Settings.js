import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';


const SettingsHomepage = () => {

    const userData = [
        {
            userId: 0, 
            firstName: 'Amy', 
            lastName: 'Johnson', 
            email: 'test@test.com', 
            password: 'amysdogfeelsafe', 
            courses: ['Feel Safe Online', 'Instructors Course'], 
            affiliate: true,
            affiliateCode: 'CA3434',
            courseProgress: 
                {courseName: 'Feel Safe Online', moduleNumComplete: 1} 
        },
        {
            userId: 1, 
            firstName: 'Joanne', 
            lastName: 'Park', 
            email: 'test1@test.com', 
            password: 'joannepark95', 
            courses: ['Feel Safe Online', 'Instructors Course'], 
            affiliate: false, 
            affiliateCode: 'KY6788',
            courseProgress: 
                {courseName: 'Feel Safe Online', moduleComplete: 0}
        },
    ]


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // gets the users first letter of first name, will be updated to grab logged in users first letter
    const firstLetters = userData.map(user => user.firstName ? user.firstName[0] : '');
    const accountSymbolLetter = firstLetters[Math.floor(Math.random() * firstLetters.length)];

    return (
        <div style={styles.safeArea}>
            <div style={styles.scrollContainer}>
                <h1 style={styles.headerMain}>Settings</h1>
                <Box style={styles.boxContainer}>
                    <Typography style={styles.menuItems}>General</Typography>
                    <Typography style={styles.menuItems}>Notifications</Typography>
                    <Tooltip title='Account Settings'>
                        <IconButton 
                            onClick={handleClick} 
                            size='small'
                            style={styles.accountSettings}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar style={styles.accountSettingsIcon}>{accountSymbolLetter}</Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
            </div>
        </div>
    );
};

const styles = {
    safeArea: {
        padding: '0 20px', // Safe margin/padding for mobile view
    },
    scrollContainer: {
        overflowY: 'auto',  // Enable scroll if content overflows
        paddingBottom: '20px',
    },
    headerMain: {
        fontSize: '24px',
        fontFamily: 'Montserrat, sans-serif', // Adjusted font-family for web
        marginBottom: '10px',
        color: '#333',
        paddingTop: '20px',
    },
    boxContainer: {
        display: 'flex',
        flexDirection: 'column', // Align items vertically
        alignItems: 'center',
        textAlign: 'center',
    },
    menuItems: {
        minWidth: '100px',  // Adjust to make items readable
        marginBottom: '15px',
        fontSize: '16px',  // For better readability on web
        cursor: 'pointer', // Indicating clickable items
    },
    accountSettings: {
        marginLeft: '2px',
    },
    accountSettingsIcon: {
        width: '32px',
        height: '32px',
    },
};

export default SettingsHomepage;
