import AppConfig from "../lib/appconfig";

export const fetchData = async (slug: string) => {
    const slugUrl = `${AppConfig.publicUrlWeblinksPerSlug}/${slug}`

    const res = await fetch(slugUrl, {method: 'GET'})
    return await res.json()
}