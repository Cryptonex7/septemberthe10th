import Gallery from 'react-photo-gallery';
import React, {Component} from'react';

import a1 from "../../assets/Love/Anujeet/a1.jpg";
import a2 from "../../assets/Love/Anujeet/a2_4x3.jpg";
import a3 from "../../assets/Love/Anujeet/a3_16x9.jpg";
import a4 from "../../assets/Love/Anujeet/a4_4x3.jpg";
import a5 from "../../assets/Love/Anujeet/a5.jpg";
import a6 from "../../assets/Love/Anujeet/a6.jpg";
import a7 from "../../assets/Love/Anujeet/a7_4x5.jpg";
import a8 from "../../assets/Love/Anujeet/a8_4x3.jpg";
import a9 from "../../assets/Love/Anujeet/a9_3x4.jpg";
import a10 from"../../assets/Love/Anujeet/a10_9x16.jpg";
import a11 from"../../assets/Love/Anujeet/a11_4x5.jpg";

class Anujeet extends Component {
    render(){
        return<Gallery photos={ANUJEET}/>;
    };
}

export default Anujeet;

const ANUJEET = [
    {
      src: `${a1}`,
      width: 1,
      height: 1
    },
    {
      src: `${a2}`,
      width: 4,
      height: 3
    },
    {
      src: `${a3}`,
      width: 16,
      height: 9
    },
    {
      src: `${a4}`,
      width: 4,
      height: 3
    },
    {
      src: `${a5}`,
      width: 1,
      height: 1
    },
    {
      src: `${a6}`,
      width: 1,
      height: 1
    },
    {
      src: `${a7}`,
      width: 4,
      height: 5
    },
    {
      src: `${a8}`,
      width: 4,
      height: 3
    },
    {
      src: `${a9}`,
      width: 3,
      height: 4
    },
    {
      src: `${a10}`,
      width: 9,
      height: 16
    },
    {
      src: `${a11}`,
      width: 4,
      height: 5
    }
  ];
