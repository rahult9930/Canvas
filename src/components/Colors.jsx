import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { SketchPicker } from 'react-color';
const ColorPickerButton = ({ colooor, setColooor, currentIndex, setCurrentIndex,setBackground }) => {
  const [isColorPickerVisible, setColorPickerVisible] = useState(false);
  const [color, setColor] = useState(colooor[currentIndex]);

  const toggleColorPicker = () => {
    setColorPickerVisible(!isColorPickerVisible);
  };

  const applyColor = () => {
    setColorPickerVisible(false);
    setCurrentIndex((currentIndex + 1) % colooor.length); // Move to the next index
  };

  const handleColorChange = (newColor) => {
    const newColors = [...colooor];
    newColors[currentIndex] = newColor.hex;
    setBackground(newColors[currentIndex]);
    setColor(newColor.hex);
    setColooor(newColors);
    
  };

  return (
    <>
      <AddCircleOutlineIcon
        fontSize='large'
        onClick={toggleColorPicker}
        style={{ cursor: 'pointer' }}
      />
      {isColorPickerVisible && (
        <div>
          <SketchPicker color={color} onChange={handleColorChange} />
          <button onClick={applyColor}>Apply Color</button>
        </div>
      )}
    </>
  );
};

const Colors = (props) => {
  const [colooor, setColooor] = useState(new Array(5).fill('#FFFFFF'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const setBackground=props.setBackground;
  return (
    <div>
      <div>
        {colooor.map((color, index) => (
          <Brightness1Icon
            key={index}
            fontSize="large"
            style={{
              color: color,
              border: '2px solid black',
              borderRadius: '100%',
              marginRight: 10
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <ColorPickerButton
        colooor={colooor}
        setColooor={setColooor}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setBackground={setBackground}
      />
    </div>
  );
};

export default Colors;
