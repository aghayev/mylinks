export const addCookie = (name: string, value: string): void => {
    document.cookie = `${name}=${value}`
  }
  