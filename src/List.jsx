import React, { useEffect, useState } from 'react'
import axios from "axios"
import Userr from './Userr'

const List = () => {
    const[users,setusers]= useState([])
    useEffect(()=>{
        (async()=>{
            try{
                let result=await axios.get("https://jsonplaceholder.typicode.com/users")
                setusers(result.data)
            }catch (error){
                console.log(error)
            }
        }
    )()
},[]



    )
  return (
    <div className='List'>
        {users.map(el=><Userr el={el}/>)}

      
    </div>

  )
}

export default List
