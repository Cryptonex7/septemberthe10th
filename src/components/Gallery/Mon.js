import Gallery from 'react-photo-gallery';
import React, {Component} from'react';

import m1 from "../../assets/Love/Mon/m1.jpg";
import m2 from "../../assets/Love/Mon/m2_3x4.jpg";
import m3 from "../../assets/Love/Mon/m3_4x3.jpg";
import m4 from "../../assets/Love/Mon/m4_9x16.jpg";
import m5 from "../../assets/Love/Mon/m5.jpg";
import m6 from "../../assets/Love/Mon/m6.jpg";
import m7 from "../../assets/Love/Mon/m7_3x4.jpeg";
import m8 from "../../assets/Love/Mon/m8_3x4.jpg";
import m9 from "../../assets/Love/Mon/m9.jpg";
import m10 from"../../assets/Love/Mon/m10_4x5.png";


class Mon extends Component {
    render(){

        return(
            <div>
                <Gallery photos={MON}/>
            </div>
        );
    };


}

export default Mon;

const MON = [
    {
      src: `${m1}`,
      width: 1,
      height: 1
    },
    {
      src: `${m2}`,
      width: 3,
      height: 4
    },
    {
      src: `${m3}`,
      width: 4,
      height: 3
    },
    {
      src: `${m4}`,
      width: 9,
      height: 16
    },
    {
      src: `${m5}`,
      width: 1,
      height: 1
    },
    {
      src: `${m6}`,
      width: 1,
      height: 1
    },
    {
      src: `${m7}`,
      width: 3,
      height: 4
    },
    {
      src: `${m8}`,
      width: 3,
      height: 4
    },
    {
      src: `${m9}`,
      width: 1,
      height: 1
    },
    {
      src: `${m10}`,
      width: 4,
      height: 5
    }
  
  ];
