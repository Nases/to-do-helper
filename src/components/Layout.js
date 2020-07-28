import React, { useState, useEffect } from 'react'
import GridLayout from 'react-grid-layout'
import _ from 'lodash'

const Layout = () => {

  const build = [0, 1, 2, 3, 4].map(function (i, key, list) {
    return {
      i: i.toString(),
      x: i * 2,
      y: 0,
      w: 2,
      h: 2,
      add: i === (list.length - 1)
    }
  })

  useEffect(() => {
    setLayout(build)
  }, [])

  return (  )
}

export default Layout