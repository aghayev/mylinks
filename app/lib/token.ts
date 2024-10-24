import { Preferences } from '@capacitor/preferences'

const setToken = async () => {
    await Preferences.set({
      key: 'token',
      value: 'jwttoken',
    })
}

const getToken = async () => {
    const { value } = await Preferences.get({ key: 'token' })
    return value
}

export {
    setToken,
    getToken
}