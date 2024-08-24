import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import RestoreIcon from '@mui/icons-material/Restore';
import ArchiveIcon from '@mui/icons-material/Archive';
import VerticalTabs from './VerticalTabs'; 


const AboutUs = () => {
  const [showTabs, setShowTabs] = useState(false);

  const handleContactClick = () => {
    setShowTabs(true);
  };
  return (
    <div style={{ backgroundColor: 'orange', padding: '20px' , marginTop: '20px'}}>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '100px', justifyContent: 'center' }}>
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <Typography variant="h4" gutterBottom>
          About us
        </Typography> 
        
        <List>
          <ListItem>
            <ListItemIcon>
              <RestoreIcon />
              <ListItemText primary="  14/A, Poor Street,aaaaaaaaaaaaaaaaaaaaaaaaa"  />
            </ListItemIcon>
            
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArchiveIcon />
              <ListItemText primary=" 987-987-930-302" />
            </ListItemIcon>
            
          </ListItem>
        </List> 
        <Button variant="contained" color="primary">
          Contact Us
        </Button>
      </Grid>
         {/* Second column */}
         <Grid item  xs={4} md={4}>
         <Typography variant="h4" gutterBottom>
          <br></br>
        </Typography> 
          <List>
            <ListItem>
              <ListItemIcon>
                <ArchiveIcon />
                <ListItemText primary=" 987-987-930-302 " />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArchiveIcon />
                <ListItemText primary=" 987-987-930-302 " />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArchiveIcon />
                <ListItemText primary=" 987-987-930-302 " />
              </ListItemIcon>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={1}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Button variant="contained" color="primary" onClick={handleContactClick}>
            Contact Us
          </Button>
        </Grid>
    </Grid>
    {showTabs && <VerticalTabs />}
    </div>
    </div>
  );
};


export default AboutUs;