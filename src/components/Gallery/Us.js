import Gallery from 'react-photo-gallery';
import React, {Component} from'react';

import u1 from "../../assets/Love//Us/u1.jpg";
import u2 from "../../assets/Love//Us/u2_16x9.jpg";
import u3 from "../../assets/Love//Us/u3_3x4.jpg";
import u4 from "../../assets/Love//Us/u4_3x2.jpg";

class Us extends Component {
    render(){
        return <Gallery photos={US}/>;
    };
}

export default Us;

const US = [
    {
      src: `${u1}`,
      width: 1,
      height: 1
    },
    {
      src: `${u2}`,
      width: 16,
      height: 9
    },
    {
      src: `${u3}`,
      width: 3,
      height: 4
    },
    {
      src: `${u4}`,
      width: 3,
      height: 2
    }  
  ];
