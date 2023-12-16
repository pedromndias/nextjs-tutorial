/** @type {import('next').NextConfig} */
const nextConfig = {
    // Let's set up our images (remote ones):
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: 'www.thecocktaildb.com',
                port: '',
                pathname: '/images/**',
            }
        ]
    }
}

module.exports = nextConfig
