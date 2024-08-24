import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function MediaCard({title,image,cardColor,buttonname}) {

  return (
    <Card sx={{ maxWidth: 275 , backgroundColor: cardColor } }>
      <CardMedia
        sx={{ height: 160 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <Button size="small" >{buttonname}
        <IconButton
          aria-label="show more"
        >
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
        </Button>
      </CardActions>
    </Card>
  );
}
