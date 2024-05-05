import React, { useState } from 'react'
import StatusMessage from './StatusMessage/StatusMessage'
import { fetchData } from '../../utils/RestCalls'

const HomePage = () => {
    const [url, setUrl] = useState("")
    const [response, setResponse] = useState(null)
    const handleInput = (event) => {
        if(event.target.value){
            setUrl(encodeURIComponent(event.target.value))
        }
        else{
            setUrl("")
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            if(url){
                const r = await fetchData(url)
                setResponse(JSON.parse(r))
            }
            else{
                setResponse(null)
            }
            
        } catch (error) {
            setResponse({"error":true})
        }
      }

    return(
        <main className="flex-1 flex flex-col justify-center items-center px-4  mt-10 pb-20">
            <h1 className="text-black dark:text-white text-4xl font-bold">Should I Click This?</h1>
            <img src="/logo.png" className='h-auto max-w-xs'/>
            <div className="w-full max-w-xl">
                    <StatusMessage response={response}/>
                    <form className="flex items-center" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="flex-grow border border-gray-300 p-2 rounded-l-lg focus:outline-none text-black"
                            placeholder="IP/URL/Domain"
                            onChange={handleInput}
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg focus:shadow-outline border border-blue-500"
                        >
                            Submit
                        </button>
                    </form>
                    <h1 className="text-2xl text-left font-bold mt-4 text-red-600">Disclaimer</h1>
                    <p className="dark:text-white text-black">Use of this site is at your own risk; the user assumes full responsibility for any consequences or damages resulting from its utilization.</p>
            </div>
        </main>
    )
}

export default HomePage