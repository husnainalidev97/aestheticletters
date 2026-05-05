import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aesthetic Letters",
    short_name: "Aesthetic Letters",
    description:
      "Create aesthetic fonts with 120+ styles. Copy and paste stylish text for Instagram, Facebook, WhatsApp, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#fcf9f8",
    theme_color: "#451ebb",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
