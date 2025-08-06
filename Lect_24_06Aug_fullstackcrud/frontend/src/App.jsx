import { useState, useEffect } from 'react'
import axios from 'axios'
import UserForm from './components/UserForm.jsx'
const API = "http://localhost:5000/api/users"

function App() {
  
  const [users, setUsers] = useState([])
  const [editUser, setEditUser] = useState(null)

  const fetchUsers = async () => {
    const res = await axios.get(API)
    setUsers(res.data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  async function handleDelete(userId) {
    await axios.delete(`${API}/${userId}`)
    fetchUsers()
  }
  async function handleSubmit(data) {
    if (editUser) {
      await axios.put(`${API}/${editUser._id}`, data)
    } else {
      await axios.post(API, data)
    }
    setEditUser(null)
    fetchUsers()
  }

  return (
    <>
      <div>
        <h2>Crud App</h2>
        <UserForm onSubmit={handleSubmit} initial={editUser} />
        <ul>
          {
            users.map(user => (
              <li key={user._id}>{user.name} {user.email}
                <button onClick={() => setEditUser(user)}>Edit</button>
                <button onClick={() => handleDelete(user._id)} >Delete</button>
              </li>

            ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
