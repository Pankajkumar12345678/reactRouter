import React, { useEffect, useState } from 'react'
import {Link, useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // method -1
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Pankajkumar12345678')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center rounded-3xl m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <Link to="https://github.com/Pankajkumar12345678">
    <img className='overflow-hidden rounded-full' src={data.avatar_url} alt="Git picture" width={300} />
    </Link>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Pankajkumar12345678')
    return response.json()
}
   

