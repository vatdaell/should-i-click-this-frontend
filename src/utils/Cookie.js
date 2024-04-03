const removeCookiesByPrefix = (prefix) => {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i]
      const eqPos = cookie.indexOf('=')
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie.trim()
      if (name.startsWith(prefix)) {
        document.cookie = name + '=expires=Thu, 01 Jan 1970 00:00:00 GMT path=/'
      }
    }
  }

export {removeCookiesByPrefix}