import NavigationBar from "./NavigationBar/NavigationBar"
import TabbedHero from "./TabbedHero/TabbedHero"


function App() {
  console.log(import.meta.env.VITE_TEST)

  const myHeaders = new Headers();
  myHeaders.append("Authorization", import.meta.env.VITE_AUTHORIZATION);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow"
  };

  fetch(import.meta.env.VITE_API_URL, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));


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
