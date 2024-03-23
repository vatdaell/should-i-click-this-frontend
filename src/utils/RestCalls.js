const myHeaders = new Headers();
myHeaders.append("Authorization", import.meta.env.VITE_AUTHORIZATION);

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow"
};

async function fetchLinkData(link) {
  try {
    const response = await fetch(`${import.meta.env.VITE_LINK_API_URL}?link=${link}`, requestOptions);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
}


async function fetchDomainData(domain) {
  try {
    const response = await fetch(`${import.meta.env.VITE_DOMAIN_API_URL}?domain=${domain}`, requestOptions);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
}

export {fetchLinkData,fetchDomainData}