import { Routes, Route } from "react-router"
import Layout from "./components/Layout"
import Profile from "./pages/Profile";
import Scoreboard from "./pages/Scoreboard";
import Home from "./pages/Home";
import Form from "./pages/Form";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/scoreboard" element={<Scoreboard />}></Route>
          {/* pages go here */}
        </Route>
      </Routes>
    </div>
  )
}

