import NavigationBar from "./NavigationBar/NavigationBar"
import TabbedHero from "./TabbedHero/TabbedHero"

function App() {
  console.log(import.meta.env.VITE_TEST)


  return (
    <>
    <NavigationBar/>
    <div className="bg-gray-200 text-center py-6 h-screen">
      <TabbedHero/>
    </div>
    </>
  )
}

export default App
