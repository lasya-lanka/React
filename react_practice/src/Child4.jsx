// 4. Passing Functions
import React from 'react'

const Child4 = ({onGreet}) => {
  return (
    <button onClick={()=> onGreet('Lasya')}>Greet</button>
  )
}

export default Child4