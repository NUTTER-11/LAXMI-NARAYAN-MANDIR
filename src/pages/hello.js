import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box } from '@mui/material';
import Img1 from '../pictures/a.jpg'
import Img2 from '../pictures/b.jpg'
import Img3 from '../pictures/c.jpg'
import Img4 from '../pictures/d.jpg'

const Hello = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cardContent = [
    { image: Img1, title: "Card 1", description: "Description of card 1" },
    { image: Img2, title: "Card 2", description: "Description of card 2" },
    { image: Img3, title: "Card 3", description: "Description of card 2" },
    { image: Img4, title: "Card 4", description: "Description of card 2" },
    { image: Img1, title: "Card 5", description: "Description of card 2" },
    { image: Img2, title: "Card 6", description: "Description of card 2" },
    { image: Img3, title: "Card 7", description: "Description of card 2" },
    { image: Img4, title: "Card 8", description: "Description of card 2" },
    { image: Img1, title: "Card 9", description: "Description of card 2" },
    { image: Img2, title: "Card 10", description: "Description of card 2" },
    // Add more card content here
  ];
  const handleClickOpen = (index) => {
    setOpen(true);
    setSelectedCard(index);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCard(null);
  };


  return (
    <div class="sketchfab-embed-wrapper">
      <iframe
        title="BAHGAVA"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/291383c276de490e875100852e11425a/embed?autospin=1&autostart=1&preload=1"
        style={{ width: '100%', height: '500px' }} // Adjust height as needed
      ></iframe> 
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', maxWidth: '100%', overflowX: 'hidden' }}>
        <div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Larger View</DialogTitle>
            <DialogContent>
              <Card sx={{ maxWidth: 900 }}>
                <CardMedia
                  component="img"
                  height="300"
                  width="500"
                  image={(selectedCard !== null && cardContent[selectedCard]?.image) || Img1}
                  alt={selectedCard !== null && cardContent[selectedCard]?.title} // Set the alt text to the title of the card
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {selectedCard !== null && cardContent[selectedCard]?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedCard !== null && cardContent[selectedCard]?.description}
                  </Typography>
                </CardContent>
              </Card>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <Box sx={{ width: '45%', position: 'relative', marginTop: '20px', backgroundColor: '#f0f0f0', paddingBottom: '50px', overflow: 'hidden' }}>
          <Box
            sx={{
              display: 'flex', 
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              overflowX: 'auto',
              scrollbarWidth: 'none', /* Hide scrollbar in Firefox */
              '-ms-overflow-style': 'none', /* Hide scrollbar in Edge */
              '&::-webkit-scrollbar': {
                display: 'none', /* Hide scrollbar in Chrome, Safari, and Opera */
              },
            }}
           
          >
            {cardContent.slice(0, 6).map((content, index) => (
              <Card key={index} sx={{ maxWidth: 200, margin: '10px' }} onClick={() => handleClickOpen(index)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="80"
                    image={content.image}
                    alt="Placeholder"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {content.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {content.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
        <Box sx={{ width: '45%', position: 'relative', marginTop: '20px', backgroundColor: '#f0f0f0', paddingBottom: '50px', overflow: 'hidden' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              overflowX: 'auto',
              scrollbarWidth: 'none', /* Hide scrollbar in Firefox */
              '-ms-overflow-style': 'none', /* Hide scrollbar in Edge */
              '&::-webkit-scrollbar': {
                display: 'none', /* Hide scrollbar in Chrome, Safari, and Opera */
              },
            }}
          >
            {cardContent.slice(7, 10).map((content, index) => (
              <Card key={index} sx={{ maxWidth: 300, margin: '10px' }} onClick={() => handleClickOpen(index + 5)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    
                    image={content.image}
                    alt="Placeholder"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {content.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {content.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
      </div>
      <br></br>
    </div>
  );
  
};

export default Hello;
