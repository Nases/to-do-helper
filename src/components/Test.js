import React, { useState, useEffect } from 'react'
import GridLayout from 'react-grid-layout'
import _ from 'lodash'

const Test = () => {

  const layout = [
    { i: '1', x: 0, y: 0, w: 1, h: 1 },
    { i: '2', x: 1, y: 0, w: 3, h: 2 },
    { i: '3', x: 4, y: 0, w: 1, h: 2 }
  ];

  return (
    <div className='max-w-7xl mx-auto mt-10'>
      <GridLayout className="layout bg-teal-100" layout={layout} cols={12} rowHeight={60} width={1280} rowHeight={85} >
        <div key="1" className='bg-teal-300 active:bg-teal-400'>1</div>
        <div key="2" className='bg-teal-300 active:bg-teal-400'>2</div>
        <div key="3" className='bg-teal-300 active:bg-teal-400'>3</div>
      </GridLayout>
    </div >
  )
}

export default Test