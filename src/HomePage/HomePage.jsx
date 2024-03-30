import React from 'react'

const HomePage = () => {
    return(
        <main className="h-screen flex flex-col justify-center items-center px-4">
        <h1 className="text-2xl font-bold mb-8">Should I click this?</h1>
        <div className="w-full max-w-xl">
            <form className="flex items-center ">
                <input
                    type="text"
                    className="flex-grow border border-gray-300 p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Url"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg  focus:shadow-outline border border-blue-500"
                >
                    Submit
                </button>
            </form>
        </div>
        </main>
    )
}


export default HomePage