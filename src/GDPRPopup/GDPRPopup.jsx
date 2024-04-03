const GDPRPopup = ({ onConsent, onDecline }) => {
  return (
  <>
    <p className="mr-4">We use cookies for analytics. By continuing, you agree to our use of cookies.</p>
    <button className="bg-blue-500 text-white py-2 px-4 mr-4 rounded" onClick={onConsent}>I Agree</button>
    <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={onDecline}>No, thanks</button>
  </>

  )
}

export default GDPRPopup