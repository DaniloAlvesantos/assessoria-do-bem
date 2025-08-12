import type { MetadataRoute } from "next";

const URL = "https://assessoria-do-bem-design.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: URL + "/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
