import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.mateusz-bogacz-drewniak.pl",
      lastModified: new Date(),
    },
  ];
}
