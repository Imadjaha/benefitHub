import Sidebar from "./components/Sidebar"
import Benefits from "./pages/Benefits"
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <div className="flex min-h-screen theme-bg">
<Sidebar/>
<div className="flex flex-1 flex-col">
      <Routes>
        <Route path="/" element={<Benefits />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
