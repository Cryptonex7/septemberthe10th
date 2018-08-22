import Gallery from 'react-photo-gallery';
import React, {Component} from'react';

import v1 from "../../assets/Love/Vaibhav/v1_9x16.jpg";
import v2 from "../../assets/Love/Vaibhav/v2_9x16.jpg";
import v3 from "../../assets/Love/Vaibhav/v3.jpg";
import v4 from "../../assets/Love/Vaibhav/v4_9x16.jpg";
import v5 from "../../assets/Love/Vaibhav/v5_4x5.jpg";
import v6 from "../../assets/Love/Vaibhav/v6_9x16.jpg";
import v7 from "../../assets/Love/Vaibhav/v7_4x5.jpg";
import v8 from "../../assets/Love/Vaibhav/v8_9x16.jpg";
import v9 from "../../assets/Love/Vaibhav/v9_9x16.jpg";
import v10 from"../../assets/Love/Vaibhav/v10.jpg";


class Vaibhav extends Component {
    render(){

        return(
            <div>
                <Gallery photos={VAIBHAV}/>
            </div>
        );
    };


}

export default Vaibhav;

const VAIBHAV = [
    {
      src: `${v1}`,
      width: 9,
      height: 16
    },
    {
      src: `${v2}`,
      width: 9,
      height: 16
    },
    {
      src: `${v3}`,
      width: 1,
      height: 1
    },
    {
      src: `${v4}`,
      width: 9,
      height: 16
    },
    {
      src: `${v5}`,
      width: 4,
      height: 5
    },
    {
      src: `${v6}`,
      width: 9,
      height: 16
    },
    {
      src: `${v7}`,
      width: 4,
      height: 5
    },
    {
      src: `${v8}`,
      width: 9,
      height: 16
    },
    {
      src: `${v9}`,
      width: 9,
      height: 16
    },
    {
      src: `${v10}`,
      width: 1,
      height: 1
    }
  
  ];
