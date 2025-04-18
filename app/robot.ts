import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots{
    const Public_Domain = process.env.NEXTAUTH_URL;
    return {
        rules: {
            userAgent: "*",
            allow: ["/"],
            disallow: ["/_next", "/api", "/404", "/500", '/admin']

        },
        sitemap: `${Public_Domain}/sitemap.xml`
    }

}

/*
Important Notes:
1. Incase the NEXTAUTH_URL is not inform of https://example.lk, make sure to update the sitemap url
*/