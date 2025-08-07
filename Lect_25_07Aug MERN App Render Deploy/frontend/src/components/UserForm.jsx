import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UserForm = ({onSubmit,initial}) => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')

    useEffect(()=>{
        if(initial){
             setEmail(initial.email)
            setName(initial.name)
        }
    },[initial])

    const handleSubmit=(e)=>{
        e.preventDefault()
        onSubmit({name,email})
        setEmail('')
        setName('')
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        type='text' 
        placeholder='name'
        value={name}
        required
        onChange={e=>setName(e.target.value)}
        />
          <input
        type='text' 
        placeholder='email'
        value={email}
        required
        onChange={e=>setEmail(e.target.value)}
        />
        <button type='submit'>{initial?"update":"add"}</button>
      </form>
    </div>
  )
}

export default UserForm
