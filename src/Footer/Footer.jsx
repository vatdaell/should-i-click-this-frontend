import ThemeToggleButton from '../ThemeContext/ThemeToggleButton'
import { useTheme } from '../ThemeContext/ThemeContext'
import { useEffect, useState } from "react"
import GDPRPopup from "../GDPRPopup/GDPRPopup"
import ReactGA from 'react-ga4'
import { removeCookiesByPrefix } from "../utils/Cookie"

const Footer = () => {
    const { theme } = useTheme()
    const [consentGiven, setConsentGiven] = useState(false)
    const TRACKING_ID = import.meta.env.VITE_GA_ID
    
    useEffect(() => {
        const gaConsent = localStorage.getItem('gaConsent')
        setConsentGiven(gaConsent)
        if (gaConsent && gaConsent == 'true') {
            ReactGA.initialize(TRACKING_ID)
        }
        else{
          removeCookiesByPrefix("_ga")
        }
    
      }, [])
    
      const handleConsent = () => {
        localStorage.setItem('gaConsent', 'true')
        setConsentGiven(true)
        ReactGA.initialize(TRACKING_ID)    
      }
    
      const handleDecline = () => {
        localStorage.setItem('gaConsent', 'false')
        setConsentGiven(false)
        removeCookiesByPrefix("_ga")
      }
    return (
        <>
        <footer className="fixed inset-x-0 bottom-0 bg-teal-950	 text-white py-4 text-center r">
            <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
            <div className="flex items-center justify-start mx-4">
            {consentGiven === null && <GDPRPopup onConsent={handleConsent} onDecline={handleDecline} />}
            </div>
            <div className="flex justify-end">
                <p className="text-lg text-white font-semibold whitespace-nowrap mr-4">{theme == "dark" ? "Dark Mode" : "Light Mode"}</p>
                <ThemeToggleButton />
            </div>
        </div>
        </footer>
        
        </>

    )
}

export default Footer