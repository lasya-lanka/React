import React from 'react'

const Child = ({course,duration}) => {
  return (
    // 2. Passing Variables
    <p>Course: {course}, Duration: {duration} months</p>
  )
}

export default Child