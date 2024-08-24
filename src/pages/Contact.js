// Contact.js
import React from 'react';
import RecipeReviewCard from './RecipeReviewCard';
import Img1 from '../pictures/a.jpg'
const Contact = () => {
    const cardData = [
        {avtartitle:"SS", title: 'Pandit Shyam Sundar', date: 'September 14, 2016', image: Img1, description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.', phone: '+123456789' },
        // Add more caArd data objects as needed
        {avtartitle:"JK", title: 'Mr.Jagdeep Kaushal', date: 'September 14, 2016', image:  Img1, description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.', phone: '+987654321' },
        {avtartitle:"SB", title: 'Mr.Sanjeev Bhardwaj', date: 'September 14, 2016', image:  Img1, description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.', phone: '+111222333' },
        {avtartitle:"PG", title: 'Mr.Paramjit Gaur', date: 'September 14, 2016', image:  Img1, description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.', phone: '+111222333' },
        {avtartitle:"SS", title: 'Mr.Shubash Sharma', date: 'September 14, 2016', image:  Img1, description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.', phone: '+111222333' },
        {avtartitle:"PD", title: 'Dr.Prem Dutta', date: 'September 14, 2016', image:  Img1, description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.', phone: '+111222333' },

      ];
  return (
   <>
   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '35px', justifyContent: 'center' }}>
      {cardData.map((card, index) => (
        <RecipeReviewCard
          key={index}
          avtartitle={card.avtartitle}
          title={card.title}
          subheader={card.date}
          image={card.image}
          description={card.description}
          phone={card.phone} // Pass phone number to RecipeReviewCard
        />
      ))}
    </div>
</>    
  );
};

export default Contact;
