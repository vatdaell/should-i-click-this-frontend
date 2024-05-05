const AboutPage = () => {

    return(
        <main className="flex-1 flex flex-col justify-center items-center px-2  mt-8 pb-20">
            <div className="w-full max-w-xl">
                <article className="space-y-4">
                    <h1 className="text-4xl text-left font-bold mt-4 text-black dark:text-white">About</h1>
                    <section>
                        <h2 className="text-2xl text-left font-bold text-red-600">Disclaimer</h2>
                        <p className="dark:text-white text-black">Users of 'Should I Click This?' assume full responsibility for their use of the site. The application draws data from the data feeds of phishing.db, OpenPhish community feed, Ip Sum, Url Haus, Cins Score and Digital Side, with frequent updates to enhance accuracy. However, users are advised to exercise caution when dealing with suspicious links. 'Should I Click This?' serves as a supplementary tool for online safety, and any damages resulting from its use are solely the responsibility of the user.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl text-left font-bold text-black dark:text-white">How does it work?</h2>
                        <p className="dark:text-white text-black">
                            'Should I Click This?' operates by leveraging data from phishing.db, OpenPhish community feed, Ip Sum, Url Haus, Cins Score and Digital Side, offering users an effective way to assess the security of IP's, web links and domains. Upon entering a URL, ip or a domain, the service cross-references it with its extensive database of known phishing sites, updated regularly to ensure the latest threats are accounted for. This process allows users to instantly determine if a link is potentially harmful, providing an added layer of precaution in navigating online spaces. While 'Should I Click This?' is a valuable tool in identifying suspicious links, users are reminded to maintain vigilance and exercise sound judgment online.
                        </p>
                    </section>
                    <section className="flex flex-col space-y-1">
                        <h2 className="text-2xl text-left font-bold text-black dark:text-white">Repository Links</h2>
                        <a href="https://github.com/vatdaell/should-i-click-this-frontend" className="text-blue-500 hover:text-indigo-800">Should I Click This? Frontend repository</a>
                        <a href="https://github.com/vatdaell/should-i-click-this" className="text-blue-500 hover:text-indigo-800">Should I Click This? Backend repository</a>\
                        <h2 className="text-2xl text-left font-bold text-black dark:text-white">Data Sources</h2>
                        <a href="https://github.com/mitchellkrogza/Phishing.Database" className="text-blue-500 hover:text-indigo-800">Phishing.db</a>
                        <a href="https://openphish.com" className="text-blue-500 hover:text-indigo-800">OpenPhish</a>
                        <a href="https://github.com/stamparm/ipsum/tree/master" className="text-blue-500 hover:text-indigo-800">Ip Sum</a>
                        <a href="https://urlhaus.abuse.ch/" className="text-blue-500 hover:text-indigo-800">Url Haus</a>
                        <a href="https://cinsscore.com/" className="text-blue-500 hover:text-indigo-800">Cins Score</a>
                        <a href="https://osint.digitalside.it/" className="text-blue-500 hover:text-indigo-800">Digital Side</a>
                    </section>
                </article>
            </div>
        </main>
    )
}

export default AboutPage