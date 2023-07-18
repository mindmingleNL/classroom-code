/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media3.giphy.com",
        port: "",
        pathname: "/media/NV4cSrRYXXwfUcYnua/giphy.gif"
      },
      {
        protocol: "https",
        hostname: "media1.giphy.com",
        port: "",
        pathname: "/media/l41YoVcd7UhOWIDBK/giphy.gif"
      }
    ]
  }
};

module.exports = nextConfig;
