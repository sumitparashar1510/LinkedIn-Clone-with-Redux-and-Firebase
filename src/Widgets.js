import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    
  const newsArtical = (heading, subtitle) => (
    <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArtical("One Piece is Real", "Top News - over 1 lakh reads")}
      {newsArtical("Ace dies at Marine Ford", "Top News - over 2 lakh reads")}
      {newsArtical("Joy Boy is Back", "Top News - over 5 lakh reads")}
      {newsArtical("Shanks Oneshotted Kid", "Top News - over half lakh reads")}
      {newsArtical("Law and Straw Hat's Alliance", "Top News - over 3 lakh reads")}
      {newsArtical("Kidou has been Defeated by Sun God - Nika", "Top News - over 10 lakh reads")}
    </div>
  )
}

export default Widgets;