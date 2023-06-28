import { Routes, Route } from "react-router"
import Layout from "./components/Layout"
import Profile from "./pages/Profile";
import Scoreboard from "./pages/Scoreboard";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/scoreboard" element={<Scoreboard />}></Route>
          {/* pages go here */}
        </Route>
      </Routes>
    </div>
  )
}

