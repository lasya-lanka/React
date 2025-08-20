import React from 'react'

const Child3 = ({user,skills}) => {
  return (
    <div>
        <h3>{user.name} from {user.city}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default Child3