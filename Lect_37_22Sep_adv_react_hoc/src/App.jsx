import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Profile from "./components/Profile"
import Login from "./components/Login"
import withAuth, { Protected } from "./withAuth"
import withDark from "./withDark"



const HocProfile=withDark(withAuth(Profile))
const DarkHome=withDark(Home)
const App = () => {
  return (
 <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<DarkHome />} />
        {/* <Route path="/profile" element={<Protected><Profile/></Protected>} /> */}
        <Route path="/profile" element={<HocProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
