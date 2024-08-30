// import React from 'react';
// import Typography from '@mui/material/Typography';
// import Img1 from '../pictures/a.jpg'
// import PropTypes from 'prop-types';
// // import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';


// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
  
//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`full-width-tabpanel-${index}`}
//         aria-labelledby={`full-width-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box sx={{ p: 3 }}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }
  
//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
//   };
  
//   function a11yProps(index) {
//     return {
//       id: `full-width-tab-${index}`,
//       'aria-controls': `full-width-tabpanel-${index}`,
//     };
//   }
  

// const OurApproach = () => {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index) => {
//     setValue(index);
//   };
  
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', overflowX: 'hidden' }}>
  
//       <br></br>
//       <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', overflowX: 'hidden' }}>
      
//         <Typography variant="h3" align="left" gutterBottom>
//         Our Approch
//         </Typography>
      
//       <Typography variant="h5" align='left' gutterBottom style={{ marginTop: '2px',marginLeft:'40px' }}>
//         Interactive Paragraph
//       </Typography>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//       <div style={{ width: '50%' ,marginTop:'20px'}}>
//           <Typography variant="body1">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus odio quis sapien dignissim, sed faucibus quam feugiat. Phasellus semper fringilla nisi, non tempus odio. Integer ut pulvinar neque. Phasellus volutpat sit amet tortor id faucibus. Proin sit amet vestibulum dui. Vivamus quis nulla nec libero malesuada tempor at sit amet magna. Curabitur vestibulum nisi sit amet magna aliquam tincidunt. Aenean auctor purus ut velit egestas, sit amet rhoncus lorem elementum. Phasellus in neque risus.
//           </Typography>
//           <Typography variant="body1">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus odio quis sapien dignissim, sed faucibus quam feugiat. Phasellus semper fringilla nisi, non tempus odio. Integer ut pulvinar neque. Phasellus volutpat sit amet tortor id faucibus. Proin sit amet vestibulum dui. Vivamus quis nulla nec libero malesuada tempor at sit amet magna. Curabitur vestibulum nisi sit amet magna aliquam tincidunt. Aenean auctor purus ut velit egestas, sit amet rhoncus lorem elementum. Phasellus in neque risus.
//           </Typography>
//           <Box sx={{ bgcolor: 'background.paper', width: 500 ,marginTop:'20px',marginLeft:'50px'}}>
//       <AppBar position="static">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="secondary"
//           textColor="inherit"
//           variant="fullWidth"
//           aria-label="full width tabs example"
//         >
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           Item One
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//           Item Two
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//           Item Three
//         </TabPanel>
//       </SwipeableViews>
//     </Box>
//       </div>
//         <img src={Img1} alt="Your" style={{ width: '45%',height:'50%', marginLeft: '50px',marginTop:'5px'  }} />

//       </div>
//     </div>
// </div>

//   );
// };


// export default OurApproach;
