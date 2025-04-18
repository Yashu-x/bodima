
export default async function sitemap() {
    const Public_Domain = process.env.NEXTAUTH_URL;
    return [
        {
            url: `${Public_Domain}/`,
            lastModified: new Date().toISOString(),
        },
    ]
}

/*
Important Notes:
1. Incase the NEXTAUTH_URL is not inform of https://example.lk, make sure to update the url accordingly
*/