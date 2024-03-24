import { UisExclamationOctagon, UisCheckCircle  } from '@iconscout/react-unicons-solid'

const DomainStatusMessage = ({data}) => {
  let message = "Please fill the domain below to check the status of the domain"
  let icon = <></>
  if(data && data != {}){
    message = data.status ? import.meta.env.VITE_DOMAIN_UNSAFE_MESSAGE : import.meta.env.VITE_DOMAIN_SAFE_MESSAGE
    icon = data.status ? <UisExclamationOctagon color="#FF0D0D"/> : <UisCheckCircle color="#198D19"/>
  }
  
  return (<div className="flex flex-col w-full text-left mb-2">
  <h1 className="text-2xl font-bold">Instructions</h1>
  <p>Paste the suspicious domain, include the domain, subdomaina and the tld only for example subdomain.domain.repl.co or domain.com. Do not include protocols such as http:// or https:// </p>
  <div className='flex flex-wrap space-x-2'>
    {icon}
    <p>{message}</p>
  </div>
  </div>)
}

export default DomainStatusMessage