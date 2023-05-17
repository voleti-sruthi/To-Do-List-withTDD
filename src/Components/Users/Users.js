import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {
    const [users,setUsers] = useState([])
    const fetchUsers = async ()=>{
        await axios.get("https://randomuser.me/api/?results=5").then((response)=>{
const{results} = response.data;
setUsers(results);
        });
    }
    useEffect(()=>{
        fetchUsers()
    },[])
  return (
    <div>
        {
            users.map((item,index)=>{
                return(
                    <div key={index} data-testid="user-id">
                        <h2>{item.name}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Users