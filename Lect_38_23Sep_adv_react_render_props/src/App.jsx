import { useState } from 'react'
import Form from './Form'
import { Clock } from './Clock';

function App() {
  return (
    <>
      <Form 
        render={({ formData,handleSubmit, handleChange,error }) => {
          return (
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder='name' 
                name='name' 
                value={formData.name || ""} 
                onChange={handleChange}
              />
              {error.name&&<p>{error.name}</p>}
              <input 
                type="text" 
                placeholder='password' 
                name='password' 
                value={formData.password || ""} 
                onChange={handleChange} 
                />
                {error.password&&<p>{error.password}</p>}
              <button type='submit'>submit</button>
            </form>
          )
        }}
      />
      
      <h2>clock</h2>
            <Clock
        render={(time) => {
          return <p>The current time is {time.toLocaleTimeString("en-US")}</p>;
        }}
      />

    </>
  )
}

export default App
