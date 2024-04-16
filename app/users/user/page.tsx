import React from 'react'

const page = async ()  => {
  const res = await fetch('https://catfact.ninja/fact')
  const users = await res.json()
  return (
    <div>
      <h1>User</h1>
      <ul>{users.fact}</ul>
    </div>
  )
}

export default page
