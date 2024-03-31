import { UisExclamationOctagon, UisCheckCircle, UisExclamationTriangle } from '@iconscout/react-unicons-solid'

const StatusMessage = ({ response }) => {
    let message = "Please fill the domain below to check the status of the domain"
    let icon = <></>

    if(response){
        if(response.error) {
            icon = <UisExclamationTriangle color="#FFE900"/>
            message = `${import.meta.env.VITE_URL_ERROR_MESSAGE}`
        }
        else {
            message = response.status ? `${import.meta.env.VITE_URL_UNSAFE_MESSAGE}` :`${import.meta.env.VITE_URL_SAFE_MESSAGE}`
            icon = response.status ? <UisExclamationOctagon color="#FF0D0D"/> : <UisCheckCircle color="#198D19"/>
        }
    }


    return (
        <div className='flex flex-wrap space-x-2 mx-2'>
            {icon}
            <p className="text-left mb-4">{message}</p>
        </div>
    )
}

export default StatusMessage