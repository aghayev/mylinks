import { Preferences } from '@capacitor/preferences'

const getMobileStorageUtil = () => {

const set = async (key: string, value: string) => {
    await Preferences.set({
      key: key,
      value: value,
    })
  }
  
  const get = async (key: string) => {
    const { value } = await Preferences.get({ key: key })

    return value
  }
  
  const remove = async (key: string) => {
    await Preferences.remove({ key: key })
  }

  return {
    set,
    get,
    remove
  }  
}

const _mobileStorageUtil = getMobileStorageUtil()

const mobileStorageUtil = (() => {
  const { set, get, remove } = _mobileStorageUtil
  return {
    set,
    get,
    remove,
  }
})()

export { mobileStorageUtil }
