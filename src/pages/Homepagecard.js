// Contact.js
import React from 'react';
import MediaCard from './MediaCard.js';
import Img1 from '../pictures/a.jpg'
import Img2 from '../pictures/b.jpg'
import Img3 from '../pictures/c.jpg'
import { Box } from '@mui/material';
const Homepagecard = () => {
    const cardData = [
        { title: 'कीर्तन', date: 'September 14, 2016', image: Img1, buttonname:'hello',description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with' },
        // Add more card data objects as needed
        { title: 'श्री हनुमान चालीसा पाठ', image: Img2, buttonname:'ji',description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.' },
        { title: 'श्री सुंदर कांड पाठ', image: Img3,buttonname:'jiii', description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'},
    ];
  return (
    <Box sx={{ width: '90%', position: 'absolute',marginTop: '20px' ,marginLeft:'45px', backgroundColor: '#f0f0f0', paddingBottom: '50px', overflow: 'hidden' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center',marginTop: '40px' }}>
      {cardData.map((card, index) => (
        <MediaCard
          key={index}
          title={card.title}
          image={card.image}
          buttonname={card.buttonname}
          description={card.description}
        />
      ))}
    </div>
    </Box>
    
  );
};

export default  Homepagecard;
