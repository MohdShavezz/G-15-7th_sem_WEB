import React from 'react'
import useFetchUser from '../Hook/useFetchUsers'

const UserList:React.FC = () => {
    const {data,loading,error} =useFetchUser('https://dummyjson.com/users')

    if(loading){
       return <p>Loading...</p>
    }
    if(error){
       return <p>{error}</p>
    }
    console.log(data)

  return (
    <div>
      <h2>Users List:</h2>
      {
        data.length>0&&data.slice(0,5).map((user,ind)=>(
            <div key={user.id} style={{background:'lightgray'}}>
                <p>{user.firstName}</p>
                <p>{user.email}</p>
            </div>
        ))
      }
    </div>
  )
}

export default UserList
