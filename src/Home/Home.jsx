import NavigationBar from '../NavigationBar/NavigationBar'
import HomePage from './HomePage/HomePage'
import Footer from '../Footer/Footer'
const Home = () => 
    (
        <div className="dark:bg-zinc-900 bg-white min-h-screen">
            <NavigationBar/>
            <HomePage/>
            <Footer/>
        </div>
    )


export default Home