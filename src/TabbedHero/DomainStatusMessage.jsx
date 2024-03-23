import { UisExclamationOctagon, UisCheckCircle  } from '@iconscout/react-unicons-solid'

const DomainStatusMessage = ({data}) => {
  let message = "Please fill the domain below to check the status of the domain"
  let icon = <></>
  if(data && data != {}){
    message = data.status ? import.meta.env.VITE_DOMAIN_UNSAFE_MESSAGE : import.meta.env.VITE_DOMAIN_SAFE_MESSAGE
    icon = data.status ? <UisExclamationOctagon color="#FF0D0D"/> : <UisCheckCircle color="#198D19"/>
  }
  
  return (<div className="flex flex-nowrap">
  {icon}
  <h1>{message}</h1>
  </div>)
}

export default DomainStatusMessage