import React from 'react'

interface Iprops {
    name: string,
    email?: string
}

export default function contact({name, email = 'N/A'}: Iprops) {
  return (
    <div className='container my-3 bg-secondary py-2 px-3'>

      <p> <strong>Name</strong>: {name} </p> 
      <p> <strong>Email</strong>: {email} </p> 

    </div>
  )
}
