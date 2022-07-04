/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/:any*',
				destination: '/404',
			},
		];
	},
	images: {
		domains: ['cdn.pixabay.com'],
	},
}

module.exports = nextConfig
