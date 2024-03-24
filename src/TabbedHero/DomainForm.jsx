import React, {useState} from 'react'
import { fetchDomainData } from '../utils/RestCalls'
import DomainStatusMessage from './DomainStatusMessage'

const DomainForm = () => {
  const [domain, setDomain] = useState("")
  const [data, setData] = useState(null)
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit action
    try {

      if(domain){
        const escapedDomain = encodeURIComponent(domain)
        const result = await fetchDomainData(escapedDomain)
        
        if(result){
          const data = JSON.parse(result);
          setData(data)
        }
      }
      else{
        setData(null)
      }

    } catch (error) {
      console.error('Submit Error:', error)
    }
  }

    return (
    <div className="flex flex-col justify-center items-center bg-white p-4">
      <DomainStatusMessage className="w-full flex justify-start" data={data}/>
      <form className="w-full m-8  mt-4" action="#" onSubmit={handleSubmit}>
        <div className="flex flex-row items-center items-center border-2 border-gray-200 rounded-lg overflow-hidden">
          <input
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="min-w-0 w-full px-4 py-2"
            id="domain"
            placeholder="Domain"
            aria-label="Domain"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    )
}

export default DomainForm