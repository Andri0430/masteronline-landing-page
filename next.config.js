const ASSET_PREFIXES = {
    production: '/landing-page',
    development: '/landing-page',
    default: '/',
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: ASSET_PREFIXES[process.env.STAGE] || ASSET_PREFIXES.default,
    output: 'export',
}

module.exports = nextConfig
