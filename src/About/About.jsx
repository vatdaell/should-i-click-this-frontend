import NavigationBar from "../NavigationBar/NavigationBar"
import AboutPage from "./AboutPage/AboutPage"
import Footer from "../Footer/Footer"

const About = () => (
    <div className="dark:bg-zinc-900 bg-white min-h-screen">
        <NavigationBar/>
        <AboutPage/>
        <Footer/>
    </div>
)

export default About