import { Outlet } from "react-router-dom";
import Navbar from "./components/NavbarComponent"; // Updated to match the new file name

function App() {

  return (
    <div>
      <Navbar setSelectedCategory={(category: string) => console.log(category)} />
      <main className='container pt-5'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
