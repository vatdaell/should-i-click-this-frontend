import { UisExclamationOctagon, UisCheckCircle  } from '@iconscout/react-unicons-solid'

const LinkStatusMessage = ({data}) => {
  let message = "Please fill the link below to check the status of the link"
  let icon = <></>
  if(data && data != {}){
    message = data.status ? import.meta.env.VITE_LINK_UNSAFE_MESSAGE : import.meta.env.VITE_LINK_SAFE_MESSAGE
    icon = data.status ? <UisExclamationOctagon color="#FF0D0D"/> : <UisCheckCircle color="#198D19"/>
  }
  
  return (<div className="flex flex-col w-full text-left mb-2">
  <h1 className="text-2xl font-bold">Instructions</h1>
  <p>Paste the suspicious link, include everything like for example ftp://ipaddress/path/to/file.html or http://domain.tld/path/to/file.html</p>
  <div className='flex flex-wrap space-x-2'>
    {icon}
    <p>{message}</p>
  </div>
  </div>)
}

export default LinkStatusMessage