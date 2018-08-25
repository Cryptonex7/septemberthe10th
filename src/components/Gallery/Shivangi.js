import Gallery from 'react-photo-gallery';
import React, {Component} from'react';

import s1 from "../../assets/Love/Shivangi/s1.jpg";
import s2 from "../../assets/Love/Shivangi/s2.jpg";
import s3 from "../../assets/Love/Shivangi/s3.jpg";
import s4 from "../../assets/Love/Shivangi/s4.jpg";
import s5 from "../../assets/Love/Shivangi/s5_4x3.jpg";
import s6 from "../../assets/Love/Shivangi/s6.jpg";
import s7 from "../../assets/Love/Shivangi/s7_3x4.jpg";
import s8 from "../../assets/Love/Shivangi/s8_3x4.jpeg";

class Shivangi extends Component {
    render(){
        return <Gallery photos={SHIVANGI}/>;
    };
}

export default Shivangi;

const SHIVANGI = [
    {
      src: `${s1}`,
      width: 1,
      height: 1
    },
    {
      src: `${s2}`,
      width: 1,
      height: 1
    },
    {
      src: `${s3}`,
      width: 1,
      height: 1
    },
    {
      src: `${s4}`,
      width: 1,
      height: 1
    },
    {
      src: `${s5}`,
      width: 4,
      height: 3
    },
    {
      src: `${s6}`,
      width: 1,
      height: 1
    },
    {
      src: `${s7}`,
      width: 3,
      height: 4
    },
    {
      src: `${s8}`,
      width: 3,
      height: 4
    }
  
  ];
  