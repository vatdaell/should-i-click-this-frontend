import React, { useState } from 'react';
import { fetchLinkData } from '../utils/RestCalls';
import { useLinkStatus } from "../LinkStatusContext/LinkStatusProvider";
import LinkStatusMessage from './LinkStatusMessage'

const LinkForm = () => {
  const [link, setLink] = useState('')
  const { updateLinkStatus } = useLinkStatus()
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit action
    try {
      const escapedLink = encodeURIComponent(link)
      const result = await fetchLinkData(escapedLink)
      if(result){
        const data = JSON.parse(result);
        updateLinkStatus(data); 
      }
    } catch (error) {
      console.error('Submit Error:', error)
    }
  }
  return (
      <div className="flex flex-col justify-center items-center bg-white p-4">
      <LinkStatusMessage/>
      <form className="w-full m-8" action="#" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-center border-2 border-gray-200 rounded-lg overflow-hidden">
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="flex-auto min-w-0 w-full px-4 py-2"
            id="link"
            placeholder="Link"
            aria-label="Link"
          />
          <button
            className="w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    )
}

export default LinkForm