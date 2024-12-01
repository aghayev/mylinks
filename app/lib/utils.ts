
export const getHostname = () => {
    let hostname = ""
    if (typeof window !== "undefined") {
        hostname = window.location.hostname
    }
    return hostname
}