import React from 'react'

const Child = ({name,age,isStudent}) => {
  return (
    <div>
        {/* 1. Passing Static Values */}
        <h2>my name is:<i>{name}</i>, age: {age}, Student: {isStudent ? 'yes': 'no'}</h2>
    </div>
  )
}

export default Child