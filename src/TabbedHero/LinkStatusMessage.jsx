const LinkStatusMessage = ({data}) => {
  let message = "Please fill the link below to check the status of the link"
  
  if(data && data != {}){
    message = data.status ? "Yes" : "No"
  }
  
  return <h1>{message}</h1>
}

export default LinkStatusMessage