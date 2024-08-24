
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";
import FixedBottomNavigation from "./FixedBottomNavigation";

const Gallery = () => {

  return (
    // <div class="sketchfab-embed-wrapper">
    //   <iframe
    //     title="BAHGAVA"
    //     frameBorder="0"
    //     allowFullScreen
    //     mozallowfullscreen="true"
    //     webkitallowfullscreen="true"
    //     allow="autoplay; fullscreen; xr-spatial-tracking"
    //     xr-spatial-tracking
    //     execution-while-out-of-viewport
    //     execution-while-not-rendered
    //     web-share
    //     src="https://sketchfab.com/models/74b589daa77748539b673e4cfc366b73/embed?autostart=1"
    //     style={{ width: '100%', height: '500px' }} // Adjust height as needed
    //   ></iframe> 
    //   <br></br>
    // </div>
    <> <SwipeableTextMobileStepper></SwipeableTextMobileStepper> 
        <FixedBottomNavigation></FixedBottomNavigation>       
    </>
    
  );
  
};

export default Gallery;
