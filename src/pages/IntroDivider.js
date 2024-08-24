import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import lordvishnuvideo from '../pictures/lordvishnuvideo.mp4'

export default function IntroDivider() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 300, marginTop: 70, marginLeft: 15 }}>
      <Box sx={{ p: 2 }}>
        {/* Replace the below video URL with your own */}
        <video width="100%" controls autoplay loop  muted>
          <source src={lordvishnuvideo} type="video/mp4" />
        </video>
      </Box>
    </Card>
  );
}
