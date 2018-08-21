import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";
import cat3 from "../assets/cat3.jpg";
 
export default class Sample extends React.Component {
    render() {
    return (
        <Gallery photos={PHOTO_SET} />
    );
    }
}
const PHOTO_SET = [
  {
    src: `${cat1}`,
    width: 4.35,
    height: 4
  },
  {
    src: `${cat2}`,
    width: 1.25,
    height: 1
  },
  {
    src: `${cat3}`,
    width: 1.5,
    height: 1
  },{
    src: `${cat1}`,
    width: 4.35,
    height: 4
  },
  {
    src: `${cat2}`,
    width: 1.25,
    height: 1
  },
  {
    src: `${cat3}`,
    width: 1.5,
    height: 1
  },{
    src: `${cat1}`,
    width: 4.35,
    height: 4
  },
  {
    src: `${cat2}`,
    width: 1.25,
    height: 1
  },
  {
    src: `${cat3}`,
    width: 1.5,
    height: 1
  },{
    src: `${cat1}`,
    width: 4.35,
    height: 4
  },
  {
    src: `${cat2}`,
    width: 1.25,
    height: 1
  },
  {
    src: `${cat3}`,
    width: 1.5,
    height: 1
  },{
    src: `${cat1}`,
    width: 4.35,
    height: 4
  },
  {
    src: `${cat2}`,
    width: 1.25,
    height: 1
  },
  {
    src: `${cat3}`,
    width: 1.5,
    height: 1
  },{
    src: `${cat1}`,
    width: 4.35,
    height: 4
  },
  {
    src: `${cat2}`,
    width: 1.25,
    height: 1
  },
  {
    src: `${cat3}`,
    width: 1.5,
    height: 1
  },{
    src: `${cat1}`,
    width: 4.35,
    height: 4
  },
  {
    src: `${cat2}`,
    width: 1.25,
    height: 1
  },
  {
    src: `${cat3}`,
    width: 1.5,
    height: 1
  },{
    src: `${cat1}`,
    width: 4.35,
    height: 4
  },
  {
    src: `${cat2}`,
    width: 1.25,
    height: 1
  },
  {
    src: `${cat3}`,
    width: 1.5,
    height: 1
  },{
    src: `${cat1}`,
    width: 4.35,
    height: 4
  },
  {
    src: `${cat2}`,
    width: 1.25,
    height: 1
  },
  {
    src: `${cat3}`,
    width: 1.5,
    height: 1
  },{
    src: `${cat1}`,
    width: 4.35,
    height: 4
  },
  {
    src: `${cat2}`,
    width: 1.25,
    height: 1
  },
  {
    src: `${cat3}`,
    width: 1.5,
    height: 1
  },{
    src: `${cat1}`,
    width: 4.35,
    height: 4
  },
  {
    src: `${cat2}`,
    width: 1.25,
    height: 1
  },
  {
    src: `${cat3}`,
    width: 1.5,
    height: 1
  },

];