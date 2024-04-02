import {createBrowserRouter, RouterProvider,} from "react-router-dom"
import NavigationBar from "./NavigationBar/NavigationBar"
import HomePage from "./HomePage/HomePage"
import AboutPage from "./AboutPage/AboutPage"
import { useTheme } from "./ThemeContext/ThemeContext"
import { useEffect } from "react"
import ThemeToggleButton from './ThemeContext/ThemeToggleButton'



const home = <div className="dark:bg-zinc-900	bg-white min-h-screen">
    <NavigationBar/><HomePage/>
      <footer className="fixed inset-x-0 bottom-0 bg-gray-800 text-white py-4 text-center r">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-start">
        </div>
        <div className="flex justify-end">
          <ThemeToggleButton />
        </div>
      </div>
    </footer>
  </div>
const router = createBrowserRouter([
  {
    path: "/",
    element:  home,
    errorElement: <div>Error</div>,
  },
  {
    path: "/about",
    element: <><NavigationBar/><AboutPage/></>
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
