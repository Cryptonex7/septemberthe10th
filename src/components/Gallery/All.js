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

import m1 from "../../assets/Love/Mon/m1.jpg";
import m2 from "../../assets/Love/Mon/m2_3x4.jpg";
import m3 from "../../assets/Love/Mon/m3_4x3.jpg";
import m4 from "../../assets/Love/Mon/m4_9x16.jpg";
import m5 from "../../assets/Love/Mon/m5.jpg";
import m6 from "../../assets/Love/Mon/m6.jpg";
import m7 from "../../assets/Love/Mon/m7_3x4.jpg";
import m8 from "../../assets/Love/Mon/m8_3x4.jpg";
import m9 from "../../assets/Love/Mon/m9.jpg";
import m10 from"../../assets/Love/Mon/m10_4x5.jpg";

import u1 from "../../assets/Love//Us/u1.jpg";
import u2 from "../../assets/Love//Us/u2_16x9.jpg";
import u3 from "../../assets/Love//Us/u3_3x4.jpg";
import u4 from "../../assets/Love//Us/u4_3x2.jpg";


class All extends Component {
    render(){

        return <Gallery photos={ALL}/>;
    };
}

export default All;

const ALL = [

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
    },
    {
        src: `${m1}`,
        width: 4,
        height: 5
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
        width: 1,
        height: 1
    },
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
    },
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
    },
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
