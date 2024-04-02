import ThemeToggleButton from './ThemeContext/ThemeToggleButton'

const Footer = () => {
    return (
        <footer className="fixed inset-x-0 bottom-0 bg-gray-800 text-white py-4 text-center r">
            <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
                <div className="flex justify-end">
                <ThemeToggleButton />
                </div>
            </div>
        </footer>
    )
}