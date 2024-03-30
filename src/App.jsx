import {createBrowserRouter, RouterProvider,} from "react-router-dom"
import NavigationBar from "./NavigationBar/NavigationBar"
import HomePage from "./HomePage/HomePage"


const s = <><NavigationBar/><HomePage/></>
const router = createBrowserRouter([
  {
    path: "/",
    element:  s,
    errorElement: <div>Error</div>,
  },
  {
    path: "/about",
    element: <div>About</div>
  }
])


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
