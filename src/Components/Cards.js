import React from "react";
import png1 from '../assets/images/1.png';
import png2 from '../assets/images/2.png';
import png3 from '../assets/images/3.png';
import png4 from '../assets/images/4.png';
import png5 from '../assets/images/5.png';
import png6 from '../assets/images/6.png';
import png7 from '../assets/images/7.png';

export default function Cards(props) {
  const { albums } = props;
  console.log(albums);

  return (
    <div className="album-container">
      {albums.map((album, index) => {
        // Cycle through PNGs based on index
        const pngIndex = index % 7 + 1; // There are 7 PNGs (1 to 7)
        let png = 1;
        switch(pngIndex) {
          case 2: png = png2;
          break;
          case 3: png = png3;
          break;
          case 4: png = png4;
          break;
          case 5: png = png5;
          break;
          case 6: png = png6;
          break;
          case 7: png = png7;
          break;
          default: png = png1;
          break;
        }

        return (
            <div className='album-card' key={index} >
              <img src={png} alt="card_image" className="card-image" />
              <div className='card-title' >{album.title}</div>
            </div>
        );
      })}
    </div>
  );
}
