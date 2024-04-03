import {createBrowserRouter, RouterProvider,} from "react-router-dom"
import { useTheme } from "./ThemeContext/ThemeContext"
import { useEffect } from "react"
import Home from "./Home/Home"
import About from "./About/About"


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home/>,
    errorElement: <div>Error</div>,
  },
  {
    path: "/about",
    element: <About/>
  }
])


const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")

    }
  }, [theme])

  return (
      <RouterProvider router={router}/>
  )
}

export default App
