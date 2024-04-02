import ThemeToggleButton from '../ThemeContext/ThemeToggleButton'
import { useTheme } from '../ThemeContext/ThemeContext'


const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className="fixed inset-x-0 bottom-0 bg-teal-950	 text-white py-4 text-center r">
            <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
            <div className="flex items-center justify-start">
            </div>
            <div className="flex justify-end">
                <p className="text-lg text-white font-semibold whitespace-nowrap mr-4">{theme == "dark" ? "Dark Mode" : "Light Mode"}</p>
                <ThemeToggleButton />
            </div>
        </div>
        </footer>
    )
}

export default Footer