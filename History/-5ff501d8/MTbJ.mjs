/** @type {import('next').NextConfig} */

const nextConfig = {
	
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  devIndicators: {
    autoPrerender: false,
  },
  // Allow server to listen on all IPs (including local network)
  server: {
    host: '0.0.0.0', // Listen on all IPs (including local network)
  },
  

};



export default nextConfig;
