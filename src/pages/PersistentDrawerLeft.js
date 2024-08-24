import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItemIcon from '@mui/material/ListItemIcon';
import TabPanel from './OurApproach';
import Hello from './hello';
import Aarti from './VerticalTabs';
import Gallery from './Gallery';
const drawerWidth = 240;
const navItems = ['Home','About', 'Contact'];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
      const interval = setInterval(() => {
          setShowFirstText(prev => !prev);
      }, 3000); // Change this value to control the duration (e.g., 3000ms = 3 seconds)

      return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const [showAltTexts, setShowAltTexts] = useState(false);
  const texts = ['Aarti', 'OurApproach', 'Hello', 'Gallery'];
  const altTexts = ['आरती', 'OurApproach', 'Hello', 'तसवीरे'];
  useEffect(() => {
    const interval = setInterval(() => {
        setShowAltTexts(prev => !prev);
    }, 3000); // Change this value to control the duration (e.g., 3000ms = 3 seconds)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
}, []);


  return (
    <Router>
      <Box sx={{ display: 'flex'  }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            
            <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }}>
                {showFirstText ? 'Shri Laxmi Narayan Mandir' : 'श्री लक्ष्मी नारायण मंदिर'}
            </Typography>
            
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  component={NavLink} // Use NavLink here
                  to={`/${item.toLowerCase()}`} // Ensure route path is lowercase
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    '&.active': {
                      fontWeight: 'bold',
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: open ? 'lightblue' : 'default',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader sx={{ backgroundColor:'#147aaa' }}>                                               
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List >
            {(showAltTexts ? altTexts : texts).map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton sx={{
                    cursor: 'pointer',
                    '&:hover': {
                        color: 'red',
                    },
                }}
                        component={NavLink} // Use NavLink here
                        to={`/${text.toLowerCase().replace(' ', '')}`} // Ensure route path is lowercase and remove spaces
                    >
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>

          <Divider />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Routes>
          <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aarti" element={<Aarti/>}/>
            <Route path='/ourapproach' element={<TabPanel/>}/>
            <Route path='/hello' element={<Hello/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
          </Routes>
        </Main>
        
      </Box>
    </Router>
  );
  }

