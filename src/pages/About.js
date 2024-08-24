import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box, Slider } from '@mui/material';
import Img1 from '../pictures/a.jpg'
import Img2 from '../pictures/b.jpg'
import Img3 from '../pictures/c.jpg'
import Img4 from '../pictures/d.jpg'
import Founder_1 from '../pictures/Founder1_pic.jpg'
import Founder_2 from '../pictures/Founder2_pic.jpg'
import Founder1_name from '../pictures/Founder1_name.jpg'
import Founder2_name from '../pictures/Founder2_name.jpg'

const About = () => {
  const [open, setOpen] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
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

  const handleScrollChange = (event, newValue) => {
    setScrollValue(newValue);
  };

  return (<>
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', overflowX: 'hidden' }}>
      <div>
        <Card sx={{ maxWidth: 400 }} onClick={() => handleClickOpen(-1)}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={Img1}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
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
      <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', bottom: 350, right: 690, padding: '10px', zIndex: 100 }}>
        <Typography variant="h6">Your Text Data</Typography>
        <Typography variant="body1">More Text Here</Typography>
      </div>
    </div>
      <Box sx={{ width: '100%', position: 'relative',marginTop: '20px' , backgroundColor: '#f0f0f0', paddingBottom: '50px', overflow: 'hidden' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'auto',
            scrollbarWidth: 'none', /* Hide scrollbar in Firefox */
            '-ms-overflow-style': 'none', /* Hide scrollbar in Edge */
            '&::-webkit-scrollbar': {
              display: 'none', /* Hide scrollbar in Chrome, Safari, and Opera */
            },
          }}
          style={{ transform: `translateX(-${scrollValue * 78}px)` }}
        >
          {cardContent.map((content, index) => (
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
        <Box sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '60%' }}>
          <Slider
            aria-label="Scroll slider"
            defaultValue={0}
            value={scrollValue}
            onChange={handleScrollChange}
            step={1.0}
            marks
            min={0}
            max={10}
            valueLabelDisplay="auto"
            sx={{ mt: 1, width: '50%' }} // Adjust the width of the slider here
          />
        </Box>
      </Box>
      <br></br>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', overflowX: 'hidden' }}>
      
        <Typography variant="h4" align="center" gutterBottom>
          History
        </Typography>
      
      <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
        Interactive Paragraph
      </Typography>
      <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus odio quis sapien dignissim, sed faucibus quam feugiat. Phasellus semper fringilla nisi, non tempus odio. Integer ut pulvinar neque. Phasellus volutpat sit amet tortor id faucibus. Proin sit amet vestibulum dui. Vivamus quis nulla nec libero malesuada tempor at sit amet magna. Curabitur vestibulum nisi sit amet magna aliquam tincidunt. Aenean auctor purus ut velit egestas, sit amet rhoncus lorem elementum. Phasellus in neque risus.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus odio quis sapien dignissim, sed faucibus quam feugiat. Phasellus semper fringilla nisi, non tempus odio. Integer ut pulvinar neque. Phasellus volutpat sit amet tortor id faucibus. Proin sit amet vestibulum dui. Vivamus quis nulla nec libero malesuada tempor at sit amet magna. Curabitur vestibulum nisi sit amet magna aliquam tincidunt. Aenean auctor purus ut velit egestas, sit amet rhoncus lorem elementum. Phasellus in neque risus.
          </Typography>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Founder_1} alt="Your " style={{ width: '30%', marginRight: '20px' }} />
       
        <div style={{ width: '100%' }}
      
        > <img src={Founder1_name} alt="Your " style={{ width: '40%', marginRight: '20px' ,marginTop:'70px'}} />
                    <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus odio quis sapien dignissim, sed faucibus quam feugiat. Phasellus semper fringilla nisi, non tempus odio. Integer ut pulvinar neque. Phasellus volutpat sit amet tortor id faucibus. Proin sit amet vestibulum dui. Vivamus quis nulla nec libero malesuada tempor at sit amet magna. Curabitur vestibulum nisi sit amet magna aliquam tincidunt. Aenean auctor purus ut velit egestas, sit amet rhoncus lorem elementum. Phasellus in neque risus.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus odio quis sapien dignissim, sed faucibus quam feugiat. Phasellus semper fringilla nisi, non tempus odio. Integer ut pulvinar neque. Phasellus volutpat sit amet tortor id faucibus. Proin sit amet vestibulum dui. Vivamus quis nulla nec libero malesuada tempor at sit amet magna. Curabitur vestibulum nisi sit amet magna aliquam tincidunt. Aenean auctor purus ut velit egestas, sit amet rhoncus lorem elementum. Phasellus in neque risus.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus odio quis sapien dignissim, sed faucibus quam feugiat. Phasellus semper fringilla nisi, non tempus odio. Integer ut pulvinar neque. Phasellus volutpat sit amet tortor id faucibus. Proin sit amet vestibulum dui. Vivamus quis nulla nec libero malesuada tempor at sit amet magna. Curabitur vestibulum nisi sit amet magna aliquam tincidunt. Aenean auctor purus ut velit egestas, sit amet rhoncus lorem elementum. Phasellus in neque risus.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus odio quis sapien dignissim, sed faucibus quam feugiat. Phasellus semper fringilla nisi, non tempus odio. Integer ut pulvinar neque. Phasellus volutpat sit amet tortor id faucibus. Proin sit amet vestibulum dui. Vivamus quis nulla nec libero malesuada tempor at sit amet magna. Curabitur vestibulum nisi sit amet magna aliquam tincidunt. Aenean auctor purus ut velit egestas, sit amet rhoncus lorem elementum. Phasellus in neque risus.
          </Typography>
      </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '100%' }}>
      <img src={Founder2_name} alt="Your " style={{ width: '40%', marginRight: '20px' ,marginTop:'70px'}} />
      <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus odio quis sapien dignissim, sed faucibus quam feugiat. Phasellus semper fringilla nisi, non tempus odio. Integer ut pulvinar neque. Phasellus volutpat sit amet tortor id faucibus. Proin sit amet vestibulum dui. Vivamus quis nulla nec libero malesuada tempor at sit amet magna. Curabitur vestibulum nisi sit amet magna aliquam tincidunt. Aenean auctor purus ut velit egestas, sit amet rhoncus lorem elementum. Phasellus in neque risus.
          </Typography>
      <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus odio quis sapien dignissim, sed faucibus quam feugiat. Phasellus semper fringilla nisi, non tempus odio. Integer ut pulvinar neque. Phasellus volutpat sit amet tortor id faucibus. Proin sit amet vestibulum dui. Vivamus quis nulla nec libero malesuada tempor at sit amet magna. Curabitur vestibulum nisi sit amet magna aliquam tincidunt. Aenean auctor purus ut velit egestas, sit amet rhoncus lorem elementum. Phasellus in neque risus.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus odio quis sapien dignissim, sed faucibus quam feugiat. Phasellus semper fringilla nisi, non tempus odio. Integer ut pulvinar neque. Phasellus volutpat sit amet tortor id faucibus. Proin sit amet vestibulum dui. Vivamus quis nulla nec libero malesuada tempor at sit amet magna. Curabitur vestibulum nisi sit amet magna aliquam tincidunt. Aenean auctor purus ut velit egestas, sit amet rhoncus lorem elementum. Phasellus in neque risus.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus odio quis sapien dignissim, sed faucibus quam feugiat. Phasellus semper fringilla nisi, non tempus odio. Integer ut pulvinar neque. Phasellus volutpat sit amet tortor id faucibus. Proin sit amet vestibulum dui. Vivamus quis nulla nec libero malesuada tempor at sit amet magna. Curabitur vestibulum nisi sit amet magna aliquam tincidunt. Aenean auctor purus ut velit egestas, sit amet rhoncus lorem elementum. Phasellus in neque risus.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus odio quis sapien dignissim, sed faucibus quam feugiat. Phasellus semper fringilla nisi, non tempus odio. Integer ut pulvinar neque. Phasellus volutpat sit amet tortor id faucibus. Proin sit amet vestibulum dui. Vivamus quis nulla nec libero malesuada tempor at sit amet magna. Curabitur vestibulum nisi sit amet magna aliquam tincidunt. Aenean auctor purus ut velit egestas, sit amet rhoncus lorem elementum. Phasellus in neque risus.
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus odio quis sapien dignissim, sed faucibus quam feugiat. Phasellus semper fringilla nisi, non tempus odio. Integer ut pulvinar neque. Phasellus volutpat sit amet tortor id faucibus. Proin sit amet vestibulum dui. Vivamus quis nulla nec libero malesuada tempor at sit amet magna. Curabitur vestibulum nisi sit amet magna aliquam tincidunt. Aenean auctor purus ut velit egestas, sit amet rhoncus lorem elementum. Phasellus in neque risus.
          </Typography>
      </div>
        <img src={Founder_2} alt="Your" style={{ width: '30%', marginLeft: '20px' }} />

      </div>
    </div>

    </div>
   

    </>
  );
};


export default About;
