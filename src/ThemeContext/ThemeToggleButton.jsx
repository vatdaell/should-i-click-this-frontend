import React from 'react'
import { useTheme } from './ThemeContext'

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme()

  // Determine if the theme is set to 'dark'
  const isDarkMode = theme === 'dark'

  return (
      <label htmlFor="theme-switch" className="relative cursor-pointer">
        <input
          type="checkbox"
          id="theme-switch"
          name="theme-switch"
          hidden
          className="peer"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <span className="absolute inset-0 left-0.5 my-auto block h-6 w-6 rounded-full bg-white shadow transition-transform duration-300 peer-checked:translate-x-5"></span>
        <span className="block h-7 w-12 rounded-full border border-gray-950/5 bg-gray-200 transition duration-300 peer-checked:border-teal-500 peer-checked:bg-teal-500"></span>
      </label>
  )
}

export default ThemeToggleButton
