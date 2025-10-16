import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Counter from './Classes/Counter';
import UserList from './Classes/UserList';
import Wrapper from './Classes/Wrapper';


function App() {
  return (
    <>
        <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/counter">Counter</Link> |{" "}
        <Link to="/users">Users</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/counter" element={
          <Wrapper>
            <Counter />
          </Wrapper>
        } />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
