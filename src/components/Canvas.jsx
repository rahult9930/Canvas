import React, { useState } from 'react';
import ImageInput from './ImageInput';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import Colors from './Colors';
import Design from "./img/Design.png"
import mask from "./img/mask.png"
import stroke from "./img/stroke.png"
const Canvas = () => {
  const data = {
    "caption": {
      "text": "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
      "position": {"x": 50, "y": 50},  // Adjust the position values here
      "max_characters_per_line": 31,
      "font_size": 44,
      "alignment": "left",
      "text_color": "#FFFFFF"
    },
    "cta": {
      "text": "Shop Now",
      "position": {"x": 190, "y": 320},  // Adjust the position values here
      "text_color": "#FFFFFF",
      "background_color": "#000000"
    },
    "image_mask": {
      "x": 56,
      "y": 442,
      "width": 970,
      "height": 600
    },
    "urls": {
      "mask": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png",
      "stroke": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png",
      "design_pattern": "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png"
    }
  };
  const [background,setBackground]=useState("#0369A1");
  const [cimage,setCimage]=useState(null);
  const [text,setText]=useState(data.caption.text);
  const [cta,setCta]=useState(data.cta.text);
  return (
    
    <div>
      <Box >
        <Grid container spacing={2} style={{marginTop:5}}>
          <Grid item xs={6} style={{ height: '600px', border: '1px solid grey',
                borderRadius: '15px',
                display:'flex',
                justifyContent:"center",alignContent:"center" }}> 
             <div style={{ height:"400px" ,width:"400px"  , backgroundColor:background , marginTop:50,zIndex:0}} >
              <img src={Design} alt="designpattern" style={{ position: 'absolute', zIndex: 1 ,width:"400px",height:"400px"}} />
              <img src={mask} alt="mask" style={{ position: 'absolute', zIndex:2  ,width:"400px",height:"400px"}} />
              <img src={stroke} alt="mask" style={{ position: 'absolute', zIndex:3  ,width:"400px",height:"400px"}} />
              {/* <img src=cimage==null ?"":cimage alt="" style={{ position: 'absolute', zIndex:4  ,width:"395px",height:"395px"}}/> */}
              {cimage && <img src={cimage} alt="cimage" style={{ position: 'absolute', zIndex: 4, width: "360px", height: "220px",marginLeft:20,marginTop:163 }} />}
              <Typography variant='h6' style={{ position: 'absolute', zIndex: 5, maxWidth:"300px",marginLeft:20,color:"#FFFFFF",marginTop:20}}>{text}</Typography>
              <Button variant='text' style={{ position: 'absolute', zIndex: 6, maxWidth:"300px",padding:5, marginTop:100,marginLeft:20,backgroundColor:"#000000",color:"#FFFFFF" }}>{cta}</Button>
             </div>
            
          </Grid>
          <Grid item xs={6} style={{ height: '600px', border: '1px solid grey',
                borderRadius: '15px'}}> {/* Adjust the height here */}
            <Typography
              variant="h6"
              style={{
                border: '2px solid grey',
                borderRadius: '15px',
                color: '#7D7C7C',
                padding: '10px', /* Adding padding for better appearance */
                height: '10%', /* Make the typography element fill the entire height */
                display: 'flex', /* Display flex for alignment */
                flexDirection: 'column',
                marginBottom:20,
                width: '95%' /* Align content vertically */
              }}
            >
              Change the ad creative images <ImageInput setCimage={setCimage} />
           
            </Typography>
            <Typography variant="h5" align='center'>Edit Contents</Typography>
              <TextField
                id="outlined-basic"
                label="Ad Content"
                variant="outlined"
                value={text}
                style={{ width: '95%', marginBottom: '20px',marginTop:"10px" }}
                onChange={(e)=> setText(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Cta"
                variant="outlined"
                value={cta}
                style={{ width: '95%', marginBottom: '20px' }}
                onChange={(e)=> setCta(e.target.value)}
              />
              <Typography variant="h5">Choose your color</Typography>
              <Colors setBackground={setBackground}/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Canvas;
