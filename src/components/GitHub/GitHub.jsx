import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

useLoaderData
function GitHub() {
    const data= useLoaderData()

    // const[data,setData]=useState([])
    // useEffect(() => {
     
    // fetch('https://api.github.com/users/Anurag-Kuche')
    // .then(response=>response.json())
    // .then(data=>{
    //     setData(data);
    // })
      
        
     
    // }, [])
    
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">GitHub Followers :{data.followers}
    <img src={data.avatar_url} alt="" width={200} /></div>
  )
}

export default GitHub

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/Anurag-Kuche')
    return response.json()
}