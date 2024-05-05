import { UisExclamationOctagon, UisCheckCircle, UisExclamationTriangle } from '@iconscout/react-unicons-solid'

const StatusMessage = ({ response }) => {
    let message = "Please fill the IP/URL/Domain below to check the status of the IP/URL/Domain"
    let icon = <></>
    
    if(response){
        if(response.error) {
            icon = <UisExclamationTriangle color="#FFE900"/>
            message = `${import.meta.env.VITE_URL_ERROR_MESSAGE}`
        }
        else {
            message = response.status ? `${import.meta.env.VITE_URL_UNSAFE_MESSAGE}` :`${import.meta.env.VITE_URL_SAFE_MESSAGE}`
            icon = response.status ? <UisExclamationOctagon className="mb-4" color="#FF0D0D"/> : <UisCheckCircle className="mb-4" color="#198D19"/>
        }
    }

    return (
        <div className="flex items-center space-x-2 mx-1">
        {icon}
        <p className="text-black dark:text-white text-left mb-4 flex-1">
            {message}
        </p>
        </div>
    )
}

export default StatusMessage