import { createContext, use, useContext, useEffect, useReducer, useState } from "react";


const UserContext = createContext()

export const UserProvider =({children})=>{
    const [userData,setUserData]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUserData(data))
    },[])
    const addUser=(data)=>{
        let dataWithId={...data,id:Date.now()}
        setUserData(pre=>[...pre,dataWithId])
    }
    const updateUser=(id,updatedFields)=>{
        console.log(id,updatedFields)
        setUserData(prev=>
            prev.map(user=>user.id===id?{...user,...updatedFields}:user)
        )
    }
    const deleteUser=(id)=>{
        setUserData(prev=>
            prev.filter(user=>user.id!==id)
        )
    }

    return(
        <UserContext.Provider value={{userData,addUser,updateUser,deleteUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser=()=>useContext(UserContext);