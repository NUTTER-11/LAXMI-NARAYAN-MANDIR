import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';

import Ganeshji1 from '../pictures/Ganeshji1.jpg'
import Ganeshji_arti from '../pictures/Ganeshji_arti.jpg'
import Vishnuavatar from '../pictures/VishnuAvtar.jpg'
import Vishnuji_arti from '../pictures/Vishnuji_arti.jpg'
import Mahadevji2 from '../pictures/Mahadevji2.jpg'
import Shivji_arti from '../pictures/Shivji_arti.jpg'
import Bababalaknath2 from '../pictures/Bababalaknath2.jpg'
import bababalaknath_arti from '../pictures/bababalaknath_arti.jpg'
import Shanidev1 from '../pictures/Shanidev1.jpg'
import Shanidevji_arti from '../pictures/Shanidevji_arti.jpg'
import saibabaji_arti from '../pictures/saibabaji_arti.png'
import Saibabji1 from '../pictures/Saibabji1.jpg'
import Matarani1 from '../pictures/Matarani1.jpg'
import matarani_arti from '../pictures/matarani_arti.jpg'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Aarti() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 4, bgcolor: 'background.paper', display: 'flex', height: 624 }}
    >
      <Tabs
        orientation="vertical"
        variant="fixed"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 7, borderColor: 'transparent' }}
      >
        <Tab label="Ganesh ji Aarti" {...a11yProps(0)} />
        <Tab label="Vishnu ji Aarti" {...a11yProps(1)} />
        <Tab label="Shiv ji Aarti" {...a11yProps(2)} />
        <Tab label="Baba Balak-Nath ji Aarti" {...a11yProps(3)} />
        <Tab label="Mata Rani ji Aarti " {...a11yProps(4)} />
        <Tab label="ShaniDev ji Aarti" {...a11yProps(5)} />
        <Tab label="Sai Baba ji Aarti" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0} >
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
      <Card sx={{ maxWidth: 400 ,marginLeft:'300px'}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={Ganeshji1}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400 ,marginLeft:'30px'}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={Ganeshji_arti}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </div>
        <br></br>
        <Typography gutterBottom variant="h6" component="div" marginLeft={28}  style={{ backgroundColor: 'orange' }}  >
        गणेश जी की आरती : <br></br>
        जय गणेश जय गणेश, जय गणेश देवा।<br></br>
        माता जाकी पार्वती पिता महादेवा॥<br></br>
        एक दंत दयावंत, चार भुजा धारी।<br></br>
        माथे सिंदूर सोहे, मूसे की सवारी॥<br></br>
        जय गणेश जय गणेश, जय गणेश देवा।<br></br>
        माता जाकी पार्वती पिता महादेवा॥<br></br>
        पान चढ़े फल चढ़े, और चढ़े मेवा।<br></br>
        लड्डुअन का भोग लगे संत करें सेवा॥<br></br>
        जय गणेश जय गणेश, जय गणेश देवा।<br></br>
        माता जाकी पार्वती पिता महादेवा॥<br></br>
        अंधन को आंख देत, कोढ़िन को काया।<br></br>
        बांझन को पुत्र देत निर्धन को माया॥<br></br>
        जय गणेश जय गणेश, जय गणेश देवा।<br></br>
        माता जाकी पार्वती पिता महादेवा॥<br></br>
        सूर' श्याम शरण आए, सफल कीजे सेवा।<br></br>
        माता जाकी पार्वती पिता महादेवा॥<br></br>
        जय गणेश जय गणेश, जय गणेश देवा।<br></br>
        माता जाकी पार्वती पिता महादेवा॥<br></br>
        दीनन की लाज रखो, शंभु सुतकारी।<br></br>
        कामना को पूर्ण करो जाऊं बलिहारी॥<br></br>
        जय गणेश जय गणेश, जय गणेश देवा।<br></br>
        माता जाकी पार्वती पिता महादेवा॥<br></br>
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
      <Card sx={{ maxWidth: 400 ,marginLeft:'300px'}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={Vishnuavatar}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400 ,marginLeft:'30px'}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={Vishnuji_arti}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </div>
        <br></br>
        <Typography gutterBottom variant="h6" component="div" marginLeft={28}  style={{ backgroundColor: 'orange' }} >
        ॐ जय जगदीश हरे<br></br>
स्वामी जय जगदीश हरे<br></br>
भक्त जनों के संकट<br></br>
दास जनों के संकट<br></br>
क्षण में दूर करे<br></br>
ॐ जय जगदीश हरे<br></br>
जो ध्यावे फल पावे<br></br>
दुःखबिन से मन का<br></br>
स्वामी दुःखबिन से मन का<br></br>
सुख सम्पति घर आवे<br></br>
सुख सम्पति घर आवे<br></br>
कष्ट मिटे तन का<br></br>
ॐ जय जगदीश हरे<br></br>
<br></br>
मात पिता तुम मेरे<br></br>
शरण गहूं किसकी<br></br>
स्वामी शरण गहूं मैं किसकी<br></br>
तुम बिन और न दूजा<br></br>
तुम बिन और न दूजा<br></br>
आस करूं मैं जिसकी<br></br>
ॐ जय जगदीश हरे<br></br>
<br></br>
तुम पूरण परमात्मा<br></br>
तुम अन्तर्यामी<br></br>
स्वामी तुम अन्तर्यामी<br></br>
पारब्रह्म परमेश्वर<br></br>
पारब्रह्म परमेश्वर<br></br>
तुम सब के स्वामी<br></br>
ॐ जय जगदीश हरे<br></br>
<br></br>
तुम करुणा के सागर<br></br>
तुम पालनकर्ता<br></br>
स्वामी तुम पालनकर्ता<br></br>
मैं मूरख फलकामी<br></br>
मैं सेवक तुम स्वामी<br></br>
  कृपा करो भर्ता<br></br>
ॐ जय जगदीश हरे<br></br>
<br></br>
तुम हो एक अगोचर<br></br>
  सबके प्राणपति<br></br>
स्वामी सबके प्राणपति<br></br>
किस विधि मिलूं दयामय<br></br>
किस विधि मिलूं दयामय<br></br>
  तुमको मैं कुमति<br></br>
ॐ जय जगदीश हरे<br></br>
<br></br>
दीन-बन्धु दुःख-हर्ता<br></br>
ठाकुर तुम मेरे<br></br>
स्वामी रक्षक तुम मेरे<br></br>
अपने हाथ उठाओ<br></br>
अपने शरण लगाओ<br></br>
   द्वार पड़ा तेरे<br></br>
ॐ जय जगदीश हरे<br></br>
    विषय-विकार मिटाओ<br></br>
    पाप हरो देवा  <br></br>
    स्वमी पाप हरो देवा<br></br>
    श्रद्धा भक्ति बढ़ाओ<br></br>
      श्रद्धा भक्ति बढ़ाओ<br></br>
    सन्तन की सेवा<br></br>
        ॐ जय जगदीश हरे<br></br>
        <br></br>
      ॐ जय जगदीश हरे<br></br>
      स्वामी जय जगदीश हरे<br></br>
      भक्त जनों के संकट<br></br>
      दास जनों के संकट<br></br>
        क्षण में दूर करे<br></br>
      ॐ जय जगदीश हरे<br></br>
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
      <Card sx={{ maxWidth: 400 ,marginLeft:'300px'}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={Mahadevji2}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400 ,marginLeft:'30px'}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={Shivji_arti}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </div>
        <br></br>
        <Typography gutterBottom variant="h6" component="div" marginLeft={28}  style={{ backgroundColor: 'orange' }} >
        ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा।<br></br>

ब्रह्मा, विष्णु, सदाशिव, अर्द्धांगी धारा॥<br></br>

ॐ जय शिव ओंकारा…<br></br>

एकानन चतुरानन पञ्चानन राजे।<br></br>

हंसासन गरूड़ासन वृषवाहन साजे॥<br></br>

ॐ जय शिव ओंकारा…<br></br>

दो भुज चार चतुर्भुज दसभुज अति सोहे।<br></br>

त्रिगुण रूप निरखते त्रिभुवन जन मोहे॥<br></br>

ॐ जय शिव ओंकारा..<br></br>

अक्षमाला वनमाला मुण्डमाला धारी।<br></br>

त्रिपुरारी कंसारी कर माला धारी॥<br></br>

ॐ जय शिव ओंकारा..<br></br>

श्वेताम्बर पीताम्बर बाघम्बर अंगे।<br></br>

सनकादिक गरुणादिक भूतादिक संगे॥<br></br>

ॐ जय शिव ओंकारा..<br></br>

कर के मध्य कमण्डलु चक्र त्रिशूलधारी।<br></br>

सुखकारी दुखहारी जगपालन कारी॥<br></br>

ॐ जय शिव ओंकारा..<br></br>

ब्रह्मा विष्णु सदाशिव जानत अविवेका।<br></br>

मधु-कैटभ दो‌उ मारे, सुर भयहीन करे॥<br></br>

ॐ जय शिव ओंकारा..<br></br>

लक्ष्मी व सावित्री पार्वती संगा।<br></br>

पार्वती अर्द्धांगी, शिवलहरी गंगा॥<br></br>

ॐ जय शिव ओंकारा..<br></br>

पर्वत सोहैं पार्वती, शंकर कैलासा।<br></br>

भांग धतूर का भोजन, भस्मी में वासा॥<br></br>

ॐ जय शिव ओंकारा..<br></br>

जटा में गंग बहत है, गल मुण्डन माला।<br></br>

शेष नाग लिपटावत, ओढ़त मृगछाला॥<br></br>

ॐ जय शिव ओंकारा..<br></br>

काशी में विराजे विश्वनाथ, नन्दी ब्रह्मचारी।<br></br>

नित उठ दर्शन पावत, महिमा अति भारी॥<br></br>

ॐ जय शिव ओंकारा..<br></br>

त्रिगुणस्वामी जी की आरति जो कोइ नर गावे।<br></br>

कहत शिवानन्द स्वामी, मनवान्छित फल पावे॥<br></br>

ॐ जय शिव ओंकारा..<br></br>
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
      <Card sx={{ maxWidth: 400 ,marginLeft:'300px'}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={Bababalaknath2}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400 ,marginLeft:'30px'}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={bababalaknath_arti}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </div>
        <br></br>
        <Typography gutterBottom variant="h6" component="div" marginLeft={28}  style={{ backgroundColor: 'orange' }} >
  
ॐ जय कलाधारी हरे,<br></br>
स्वामी जय पौणाहारी हरे,<br></br>
भक्त जनों की नैया,<br></br>
दस जनों की नैया,<br></br>
भव से पार करे,<br></br>
ॐ जय कलाधारी हरे ॥<br></br>
<br></br>
बालक उमर सुहानी,<br></br>
नाम बालक नाथा,<br></br>
अमर हुए शंकर से,<br></br>
सुन के अमर गाथा ।<br></br>
ॐ जय कलाधारी हरे ॥<br></br>
<br></br>
शीश पे बाल सुनैहरी,<br></br>
गले रुद्राक्षी माला,<br></br>
हाथ में झोली चिमटा,<br></br>
आसन मृगशाला ।<br></br>
ॐ जय कलाधारी हरे ॥<br></br>
<br></br>
सुंदर सेली सिंगी,<br></br>
वैरागन सोहे,<br></br>
गऊ पालक रखवालक,<br></br>
भगतन मन मोहे ।<br></br>
ॐ जय कलाधारी हरे ॥<br></br>
<br></br>
अंग भभूत रमाई,<br></br>
मूर्ति प्रभु रंगी,<br></br>
भय भज्जन दुःख नाशक,<br></br>
भरथरी के संगी ।<br></br>
ॐ जय कलाधारी हरे ॥<br></br>
<br></br>
रोट चढ़त रविवार को,<br></br>
फल, फूल मिश्री मेवा,<br></br>
धुप दीप कुदनुं से,<br></br>
आनंद सिद्ध देवा ।<br></br>
ॐ जय कलाधारी हरे ॥<br></br>
<br></br>
भक्तन हित अवतार लियो,<br></br>
प्रभु देख के कल्लू काला,<br></br>
दुष्ट दमन शत्रुहन,<br></br>
सबके प्रतिपाला ।<br></br>
ॐ जय कलाधारी हरे ॥<br></br>
<br></br>
श्री बालक नाथ जी की आरती,<br></br>
जो कोई नित गावे,<br></br>
कहते है सेवक तेरे,<br></br>
मन वाच्छित फल पावे ।<br></br>
ॐ जय कलाधारी हरे ॥<br></br>
<br></br>
ॐ जय कलाधारी हरे,<br></br>
स्वामी जय पौणाहारी हरे,<br></br>
भक्त जनों की नैया,<br></br>
भव से पार करे,<br></br>
ॐ जय कलाधारी हरे ॥<br></br>
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
      <Card sx={{ maxWidth: 400 ,marginLeft:'300px'}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={Matarani1}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400 ,marginLeft:'30px'}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={matarani_arti}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </div>
        <br></br>
        <Typography gutterBottom variant="h6" component="div" marginLeft={28}  style={{ backgroundColor: 'orange' }} >
        अम्बे तू है जगदम्बे काली, जय दुर्गे खप्पर वाली<br></br>
तेरे ही गुण गावें भारती, ओ मैया हम सब उतारे तेरी आरती<br></br>
अम्बे तू है जगदम्बे काली, जय दुर्गे खप्पर वाली<br></br>
तेरे ही गुण गावें भारती, ओ मैया हम सब उतारे तेरी आरती<br></br>
तेरे भक्तजनो पर माता, भीड़ पड़ी है भारी, भीड़ पड़ी है भारी<br></br>
दानव दल पर टूट पड़ो, माँ करके सिंह सवारी, करके सिंह सवारी<br></br>
तेरे भक्तजनो पर माता, भीड़ पड़ी है भारी, भीड़ पड़ी है भारी<br></br>
दानव दल पर टूट पड़ो, माँ करके सिंह सवारी, करके सिंह सवारी<br></br>
सौ-सौ सिहों से भी बलशाली, हे दस भुजाओं वाली<br></br>
दुखियों के दुखड़े निवारती<br></br>
ओ मैया हम सब उतारे तेरी आरती<br></br>
अम्बे तू है जगदम्बे काली, जय दुर्गे खप्पर वाली<br></br>
तेरे ही गुण गावें भारती, ओ मैया हम सब उतारे तेरी आरती<br></br>
माँ-बेटे का है इस जग मे, बड़ा हीनिर्मल नाता, बड़ा हीनिर्मल नाता<br></br>
पूत-कपूत सुने है, पर ना माता सुनी कुमाता, माता सुनी कुमाता<br></br>
माँ-बेटे का है इस जग मे बड़ा ही निर्मल नाता, बड़ा ही निर्मल नाता<br></br>
पूत-कपूत सुने है, पर ना माता सुनी कुमाता, माता सुनी कुमाता<br></br>
सब पे करूणा दर्शाने वाली, अमृत बरसाने वाली<br></br>
दुखियों के दुखडे निवारती<br></br>
ओ मैया हम सब उतारे तेरी आरती<br></br>
अम्बे तू है जगदम्बे काली, जय दुर्गे खप्पर वाली<br></br>
तेरे ही गुण गावें भारती, ओ मैया हम सब उतारे तेरी आरती<br></br>
नहीं मांगते धन और दौलत, न चांदी न सोना, न चांदी न सोना<br></br>
हम तो मांगें माँ तेरे चरणों में, छोटा सा कोना, इक छोटा सा कोना<br></br>
नहीं मांगते धन और दौलत, न चांदी न सोना, न चांदी न सोना<br></br>
हम तो मांगें माँ मन में, इक छोटा सा कोना, इक छोटा सा कोना<br></br>
सबकी बिगड़ी बनाने वाली, लाज बचाने वाली, सतियों के सत को सवांरती<br></br>
ओ मैया हम सब उतारे तेरी आरती<br></br>
ओ अम्बे तू है जगदम्बे काली, जय दुर्गे खप्पर वाली<br></br>
तेरे ही गुण गावें भारती<br></br>
ओ मैया हम सब उतारे तेरी आरती<br></br>
ओ मैया हम सब उतारे तेरी आरती<br></br>
ओ मैया हम सब उतारे तेरी आरती<br></br>
ओ मैया हम सब उतारे तेरी आरती<br></br>
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
      <Card sx={{ maxWidth: 400 ,marginLeft:'300px'}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={Shanidev1}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400 ,marginLeft:'30px'}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={Shanidevji_arti}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </div>
        <br></br>
        <Typography gutterBottom variant="h6" component="div" marginLeft={28}  style={{ backgroundColor: 'orange' }} >
        जय जय श्री शनिदेव भक्तन हितकारी ।<br></br>
सूरज के पुत्र प्रभु छाया महतारी ॥<br></br>
॥ जय जय श्री शनिदेव..॥<br></br>
श्याम अंक वक्र दृष्ट चतुर्भुजा धारी ।<br></br>
नीलाम्बर धार नाथ गज की असवारी ॥<br></br>
॥ जय जय श्री शनिदेव..॥<br></br>
<br></br>
क्रीट मुकुट शीश रजित दिपत है लिलारी ।<br></br>
मुक्तन की माला गले शोभित बलिहारी ॥<br></br>
॥ जय जय श्री शनिदेव..॥<br></br>
<br></br>
मोदक मिष्ठान पान चढ़त हैं सुपारी ।<br></br>
लोहा तिल तेल उड़द महिषी अति प्यारी ॥<br></br>
॥ जय जय श्री शनिदेव..॥<br></br>
<br></br>
देव दनुज ऋषि मुनि सुमरिन नर नारी ।<br></br>
विश्वनाथ धरत ध्यान शरण हैं तुम्हारी ॥<br></br>
॥ जय जय श्री शनिदेव..॥<br></br>
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
      <Card sx={{ maxWidth: 400 ,marginLeft:'300px'}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={Saibabji1}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 400 ,marginLeft:'30px'}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={saibabaji_arti}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        </div>
        <br></br>
        <Typography gutterBottom variant="h6" component="div" marginLeft={28 }  style={{ backgroundColor: 'orange' }} >
        ॐ जय साईं हरे, बाबा शिरडी साईं हरे।<br></br>
भक्तजनों के कारण, उनके कष्ट निवारण॥<br></br>
शिरडी में अवतरे, ॐ जय साईं हरे॥ ॐ जय...॥<br></br>
दुखियन के सब कष्टन काजे, शिरडी में प्रभु आप विराजे।<br></br>
फूलों की गल माला राजे, कफनी, शैला सुन्दर साजे॥<br></br>
कारज सब के करें, ॐ जय साईं हरे ॥ ॐ जय...॥<br></br>
काकड़ आरत भक्तन गावें, गुरु शयन को चावड़ी जावें।<br></br>
सब रोगों को उदी भगावे, गुरु फकीरा हमको भावे॥<br></br>
भक्तन भक्ति करें, ॐ जय साईं हरे ॥ ॐ जय...॥<br></br>
हिन्दु मुस्लिम सिक्ख इसाईं, बौद्ध जैन सब भाई भाई।<br></br>
रक्षा करते बाबा साईं, शरण गहे जब द्वारिकामाई॥<br></br>
अविरल धूनि जरे, ॐ जय साईं हरे ॥ ॐ जय...॥ <br></br>
भक्तों में प्रिय शामा भावे, हेमडजी से चरित लिखावे।<br></br>
गुरुवार की संध्या आवे, शिव, साईं के दोहे गावे॥<br></br>
अंखियन प्रेम झरे, ॐ जय साईं हरे ॥ ॐ जय...॥<br></br>
ॐ जय साईं हरे, बाबा शिरडी साईं हरे।<br></br>
शिरडी साईं हरे, बाबा ॐ जय साईं हरे॥<br></br>
श्री सद्गुरु साईंनाथ महाराज की जय॥ <br></br>



        </Typography>
      </TabPanel>
      
    </Box>
  );
}