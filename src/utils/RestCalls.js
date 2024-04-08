const headers = new Headers()
headers.append("Authorization", import.meta.env.VITE_AUTHORIZATION)

const requestOptions = {
  method: "POST",
  headers: headers,
  redirect: "follow"
}

async function fetchData(url) {
    const response = await fetch(`${import.meta.env.VITE_API_URL}?url=${url}`, requestOptions)
    const result = await response.text()
    return result
}


export {fetchData}