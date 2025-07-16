import React, { use, useState } from 'react'
import { useUser } from '../context/UserContext'

const User = () => {
  const {userData,addUser,updateUser,deleteUser}=useUser()

  const [newUserName,setNewUserName]=useState('')
  const [newUserEmail,setNewUserEmail]=useState('')
  const handleAddUser=()=>{
    if(!newUserName.trim()&&!newUserEmail.trim()){
      alert('please enter both name and email')
      return
    }
    addUser({name:newUserName,email:newUserEmail})
    setNewUserEmail('')
    setNewUserName('')
  }
  const handleUpdate=(id,currentName,currentEmail)=>{
    const newName=prompt('enter new name',currentName)
    const newEmail=prompt('enter new email',currentEmail)
    //
    updateUser(id,{name:newName,email:newEmail})
  }

  return (
    <div>

      <section>
        <input type="text" placeholder='Name' value={newUserName} onChange={e=>setNewUserName(e.target.value)}/>
        <input type="email" placeholder='Email' value={newUserEmail} onChange={e=>setNewUserEmail(e.target.value)} />
        <button onClick={handleAddUser}>Add</button>
      </section>
      
      <div>
        {
          userData.length===0?"Loading..":(
            userData.map((user,indx)=>(
              <div key={indx}>
                <strong>{user.name}</strong>
                <strong>{user.email}</strong>
                <button onClick={()=>handleUpdate(user.id,user.name,user.email)}>update</button>
                <button onClick={()=>deleteUser(user.id)}>delete</button>
            </div>
            ))
          )
        }
      </div>
    </div>
  )
}

export default User
