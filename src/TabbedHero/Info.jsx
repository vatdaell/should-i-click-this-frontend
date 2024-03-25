const Info = () => 
    (
        <div className='flex flex-col w-full text-left mb-4'>
            <h1 className='text-2xl font-bold'>How does it work?</h1>
            <p>Should I Click This? is a tool that leverages the phishing.db repository to assist users in verifying the safety of links and domains. Updated hourly, it offers a swift method for checking whether a link or domain you've encountered is marked as suspicious, providing an easy way to enhance your online security.</p>
            <h1 className="text-2xl font-bold mt-4 text-red-600">Disclaimer</h1>
            <p>Should I Click This? serves as a resourceful tool utilizing the phishing.db repository to evaluate the security of links and domains. It is updated hourly to provide timely assistance in identifying suspicious links or domains. However, it's important to note that Should I Click This? is merely a tool designed to aid in your online safety efforts. The user bears full responsibility for any damages or consequences that may arise from using the tool. Always exercise caution and use your judgment when navigating online.</p>
            <div className="flex flex-col mt-4 items-start">
                <h1 className="text-2xl font-bold mb-2">Important Links</h1>
                <a className="text-blue-400 hover:text-blue-700 active:text-blue-900 py-1" href="https://github.com/vatdaell/should-i-click-this-frontend">Frontend Github</a>
                <a className="text-blue-400 hover:text-blue-700 active:text-blue-900 py-1" href="https://github.com/vatdaell/should-i-click-this">Backend Github</a>
                <a className="text-blue-400 hover:text-blue-700 active:text-blue-900 py-1" href="https://github.com/mitchellkrogza/Phishing.Database/tree/master">Phishing.db</a>
            </div>
        </div>
    )


export default Info;