import React, { createContext, useState, useContext } from 'react'

const LinkStatusContext = createContext()

export function useLinkStatus() {
  return useContext(LinkStatusContext)
}

const LinkStatusProvider = ({ children }) => {
  const [linkStatusMessage, setLinkStatusMessage] = useState('Enter the link below')

  const updateLinkStatus = (data) => {
    if (data.status) {
      setLinkStatusMessage("Link is a possible phishing link.")
    } else if (!data.status) {
      setLinkStatusMessage("Link is probably safe.")
    }
    else{
      setLinkStatusMessage("Enter the link below")
    }
  }

  return (
    <LinkStatusContext.Provider value={{ linkStatusMessage, updateLinkStatus }}>
      {children}
    </LinkStatusContext.Provider>
  )
}


export default LinkStatusProvider