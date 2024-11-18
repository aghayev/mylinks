  export const getCookieByName = (name): any => {
    if (typeof document !== 'undefined') {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts && parts.length === 2) 
      return parts?.pop()?.split(';').shift()
    }

    return null
  }
  
  export const addCookie = (name: string, value: string): void => {
    document.cookie = `${name}=${value}`
  }
  