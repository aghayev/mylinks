
export const fetchData = async (slug: string) => {
    const res = await fetch(`https://mylinks.aghayev.com/api/weblinks/${slug}`, {method: 'GET'})
    return await res.json()
};