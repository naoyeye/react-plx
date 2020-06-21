/*
* @Author: hanjiyun
* @Date:   2020-06-21 23:28:57
* @Last Modified by:   hanjiyun
* @Last Modified time: 2020-06-22 01:23:57
*/

import React from 'react';
import Plx from '../source/index';

const clipData = [
  {
    start: '.StickyText-trigger',
    duration: '30vh',
    properties: [
      {
        startValue: 0,
        endValue: -50,
        unit: 'vh',
        property: 'translateY',
      },
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
    ],
  },
  {
    start: '.StickyText-trigger',
    startOffset: '60vh',
    duration: '30vh',
    properties: [
      {
        startValue: -50,
        endValue: -100,
        unit: 'vh',
        property: 'translateY',
      },
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
];

export default class ClipPath extends React.Component {
  render() {
    return (
      <div className='ClipPathWrapper'>
        <div className='ClipPath'>
          <Plx className='section section-1' parallaxData={
            [
              {
                start: '400vh',
                end: '440vh',
                properties: [
                  {
                    startValue: {
                      t: 0,
                      r: 0,
                      b: 0,
                      l: 0
                    },
                    endValue: {
                      t: 0,
                      r: 0,
                      b: 100,
                      l: 0
                    },
                    unit: '%',
                    property: 'inset',
                  },
                ],
              },
            ]
          }/>
          <Plx className='section section-2' />
          <Plx className='section section-3' />
        </div>
      </div>
    );
  }
}
