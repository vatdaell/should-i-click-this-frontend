import { UisExclamationOctagon, UisCheckCircle  } from '@iconscout/react-unicons-solid'

const LinkStatusMessage = ({data}) => {
  let message = "Please fill the link below to check the status of the link"
  let icon = <></>
  if(data && data != {}){
    message = data.status ? import.meta.env.VITE_LINK_UNSAFE_MESSAGE : import.meta.env.VITE_LINK_SAFE_MESSAGE
    icon = data.status ? <UisExclamationOctagon color="#FF0D0D"/> : <UisCheckCircle color="#198D19"/>
  }
  
  return (<div className="flex flex-nowrap">
  {icon}
  <h1>{message}</h1>
  </div>)
}

export default LinkStatusMessage