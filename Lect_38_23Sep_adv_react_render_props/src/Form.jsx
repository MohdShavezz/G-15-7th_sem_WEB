import React, { useState } from 'react'

const Form = ({render}) => {
    const [formData,setFormData]=useState({})
    const [error,setError]=useState({})

    function validate(){
        const newError={}
        if(!formData.name){
            newError.name="name is requied"
        }
        if(!formData.password){
            newError.password="name is requied"
        }
        return newError
    }

    function handleSubmit(e){
        e.preventDefault()
        const check=validate()
        if(Object.keys(check).length>0){
            setError(check)
        }else{
            console.log(formData)
        }
    }    

    function handleChange(e){
        console.log(e.target.value)
        const {name,value}=e.target
        setFormData(prev=>({...prev,[name]:value}))
    }


    return render({formData,handleSubmit,handleChange,error})

}

export default Form
