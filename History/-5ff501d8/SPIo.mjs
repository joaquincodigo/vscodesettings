/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  devServer: {
    host: '0.0.0.0',  // Allows access from other devices in the local network
  },
};

module.exports = nextConfig;
