import { Capacitor } from "@capacitor/core"

export const getHostname = () => {
    let hostname = ""
    if (typeof window !== "undefined") {
        hostname = window.location.hostname
    }
    return hostname
}

export const isMobile = () => {
    const platform = Capacitor.getPlatform();

    // return platform !== 'web'
    return (platform === 'ios' || platform === 'android')
}